import React, { useEffect } from "react";
import Cv from "../components/Cv";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackToMenu from "../components/BackToMenu";
import { useGlobalContext } from "../Context";
import ExperienceForm from "../components/ExperienceForm";
function Experience() {
  const navigate = useNavigate();
  const { experiences, setExperiences } = useGlobalContext();
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences));
  }, [experiences]);

  const previousPage = () => {
    navigate("/usergeneral");
  };
  const nextPage = () => {
    if (isValid) {
      navigate("/education");
    }
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

        <form className="experiencesForm">
          {experiences?.map((el) => {
            return (
              <ExperienceForm
                setIsValid={setIsValid}
                key={el.id}
                vals={el}
                experiencesKey={el.id}
                experiences={experiences}
                setExperiences={setExperiences}
              />
            );
          })}

          <button
            type="button"
            onClick={() => {
              if (isValid) {
                setExperiences((prev) => [...prev, { id: nanoid() }]);
              }
            }}
            className="add-experience"
          >
            მეტი გამოცდილების დამატება
          </button>
        </form>

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
