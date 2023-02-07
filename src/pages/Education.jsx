import React, { useEffect, useState } from "react";
import Cv from "../components/Cv";
import BackToMenu from "../components/BackToMenu";
import { useNavigate } from "react-router-dom";
import EducationForm from "../components/EducationForm";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../Context";
function Education() {
  const navigate = useNavigate();
  const { education, setEducation } = useGlobalContext();
  const [isValid, setIsValid] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);
  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  //function to check if everything is filled && valid 2 finish
  function checkProperties(arr) {
    return arr.every((obj) => {
      return Object.keys(obj).every((key) => {
        if (obj[key] == undefined) {
          return false;
        } else if (key === "educationPlace" && obj[key].length < 2) {
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
    navigate("/experience");
  };

  const handleFinish = () => {
    setHasClicked(true);
    checkProperties(education) ? navigate("/finish") : "";
  };
  return (
    <section className="generalinfo">
      <div className="private-info">
        <BackToMenu />
        <div className="private-info-top-row">
          <div className="top-info">
            <h2>განათლება</h2>
            <p>3/3</p>
          </div>
          <div className="line"></div>
        </div>

        <form className="educationsForm">
          {education?.map((el) => {
            return (
              <EducationForm
                key={el.id}
                hasClicked={hasClicked}
                educationsKey={el.id}
                setIsValid={setIsValid}
                education={education}
                setEducation={setEducation}
              />
            );
          })}

          <button
            onClick={() => {
              if (isValid) {
                setEducation((prev) => [...prev, { id: nanoid() }]);
              }
            }}
            type="button"
            className="add-experience"
          >
            მეტი სასწავლებლის დამატება
          </button>
        </form>

        <div className="next-btn-cont">
          <button onClick={previousPage}>უკან</button>
          <div></div>
          <button onClick={handleFinish}>დასრულება</button>
        </div>
      </div>
      <Cv />
    </section>
  );
}

export default Education;
