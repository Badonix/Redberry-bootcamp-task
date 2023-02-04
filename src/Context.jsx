import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [image, setImage] = useState(null);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

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
        experience,
        setExperience,
        email,
        setEmail,
        phonenum,
        setPhonenum,
        education,
        setEducation,
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
