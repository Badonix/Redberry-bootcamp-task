import React from "react";
import { useNavigate } from "react-router-dom";
import backbtn from "../assets/back-btn.png";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../Context";
function BackToMenu() {
  const {
    setName,
    setSurname,
    setAbout,
    setImage,
    setEducation,
    setEmail,
    setPhonenum,
    setExperiences,
    setFile,
  } = useGlobalContext();
  const navigate = useNavigate();
  const handleBackToMenu = () => {
    setName("");
    setSurname("");
    setAbout("");
    setImage("");
    setEducation([{ id: nanoid() }]);
    setEmail("");
    setPhonenum("");
    setExperiences([{ id: nanoid() }]);
    setFile("");
    localStorage.clear();
    navigate("/");
  };
  return <img onClick={handleBackToMenu} className="back-btn" src={backbtn} />;
}

export default BackToMenu;
