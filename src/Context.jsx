import React, { useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [surname, setSurname] = useState(localStorage.getItem("surname") || "");
  const [about, setAbout] = useState(localStorage.getItem("about") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phonenum, setPhonenum] = useState(
    localStorage.getItem("phonenum") || ""
  );
  const [file, setFile] = useState(localStorage.getItem("file") || "");
  const [image, setImage] = useState(localStorage.getItem("userImage") || "");
  const [education, setEducation] = useState(
    JSON.parse(localStorage.getItem("education")) || [{ id: nanoid() }]
  );
  const [experiences, setExperiences] = useState(
    JSON.parse(localStorage.getItem("experiences")) || [{ id: nanoid() }]
  );
  const [degrees, setDegrees] = useState([]);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("about", about);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenum", phonenum);
  }, [name, surname, about, email, phonenum, image]);
  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => setDegrees(res.data));
  }, []);
  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        about,
        setAbout,
        image,
        degrees,
        setImage,
        education,
        setEducation,
        email,
        setEmail,
        phonenum,
        setPhonenum,
        experiences,
        setExperiences,
        file,
        setFile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
