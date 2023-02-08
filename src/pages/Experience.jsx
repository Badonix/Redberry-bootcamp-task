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
  const [hasClicked, setHasClicked] = useState(false);
  useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experiences));
  }, [experiences]);

  //function to check if everything is filled && valid 2 go on next page
  function checkProperties(arr) {
    return arr.every((obj) => {
      return Object.keys(obj).every((key) => {
        if (obj[key] == undefined) {
          return false;
        } else if (
          (key === "recruiter" || key === "position") &&
          obj[key].length < 2
        ) {
          return false;
        }
        if (obj[key] === "") {
          return false;
        }
        return true;
      });
    });
  }

  const previousPage = () => {
    navigate("/usergeneral");
  };
  const nextPage = () => {
    setHasClicked(true);

    if (checkProperties(experiences)) {
      console.log("IM HERE");
      navigate("/education");
    }
  };
  return (
    <section className="generalinfo">
      <div className="private-info">
        <BackToMenu />
        <div className="private-info-top-row">
          <div className="top-info">
            <div className="invis"></div>

            <h2>გამოცდილება</h2>
            <p>2/3</p>
          </div>
          <div className="line"></div>
        </div>

        <form className="experiencesForm">
          {experiences?.map((el) => {
            return (
              <ExperienceForm
                hasClicked={hasClicked}
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
              setExperiences((prev) => [...prev, { id: nanoid() }]);
              setHasClicked(false);
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
