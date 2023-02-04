import React, { useEffect } from "react";
import backbtn from "../assets/back-btn.png";
import Cv from "../components/Cv";
import { nanoid } from "nanoid";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackToMenu from "../components/BackToMenu";
import { useGlobalContext } from "../Context";
import ExperienceForm from "../components/ExperienceForm";
function Experience() {
  const navigate = useNavigate();
  const { experience, setExperience } = useGlobalContext();
  const [currentExperiences, setCurrentExperiences] = useState([
    { id: nanoid() },
  ]);
  useEffect(() => {
    setExperience(currentExperiences);
  }, [currentExperiences]);
  const previousPage = () => {
    navigate("/usergeneral");
  };
  const nextPage = () => {
    navigate("/education");
  };

  return (
    <section className="generalinfo">
      <div className="private-info">
        <BackToMenu />
        <div className="private-info-top-row">
          <div className="top-info">
            <h2>გამოცდილება</h2>
            <p>2/3</p>
          </div>
          <div className="line"></div>
        </div>
        <div className="form-cont">
          <form>
            {currentExperiences.map((el) => {
              return (
                <ExperienceForm
                  key={el.id}
                  experiencesKey={el.id}
                  currentExperiences={currentExperiences}
                  setCurrentExperiences={setCurrentExperiences}
                />
              );
            })}

            <button
              type="button"
              onClick={() =>
                setCurrentExperiences((prev) => [...prev, { id: nanoid() }])
              }
              className="add-experience"
            >
              მეტი გამოცდილების დამატება
            </button>
          </form>
        </div>

        <div className="next-btn-cont">
          <button onClick={previousPage}>უკან</button>
          <div></div>
          <button onClick={nextPage}>შემდეგი</button>
        </div>
      </div>
      <Cv />
    </section>
  );
}

export default Experience;
