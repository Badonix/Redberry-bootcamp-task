import React, { useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const [surname, setSurname] = useState(localStorage.getItem("surname") || "");
  const [about, setAbout] = useState(localStorage.getItem("about") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phonenum, setPhonenum] = useState(
    localStorage.getItem("phonenum") || ""
  );
  const [image, setImage] = useState(localStorage.getItem("userImage") || "");
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState(
    JSON.parse(localStorage.getItem("experiences")) || [{ id: nanoid() }]
  );

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("surname", surname);
    localStorage.setItem("about", about);
    localStorage.setItem("email", email);
    localStorage.setItem("phonenum", phonenum);
  }, [name, surname, about, email, phonenum, image]);
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
        setImage,
        education,
        setEducation,
        email,
        setEmail,
        phonenum,
        setPhonenum,
        experiences,
        setExperiences,
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
