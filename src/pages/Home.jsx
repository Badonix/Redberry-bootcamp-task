import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import watermark from "../assets/watermark.png";
function Home() {
  const navigate = useNavigate();
  return (
    <section className="homepage">
      <div className="top-row">
        <img src={logo} />
        <div className="line"></div>
      </div>
      <img src={watermark} className="watermark" />
      <button onClick={() => navigate("usergeneral")}>რეზიუმეს დამატება</button>
      <div></div>
    </section>
  );
}

export default Home;
