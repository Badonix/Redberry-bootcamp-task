import React from "react";
import { useNavigate } from "react-router-dom";
import backbtn from "../assets/back-btn.png";
function BackToMenu() {
  const navigate = useNavigate();
  return (
    <img onClick={() => navigate("/")} className="back-btn" src={backbtn} />
  );
}

export default BackToMenu;
