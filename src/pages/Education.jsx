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
  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
    console.log(education);
  }, [education]);

  const previousPage = () => {
    navigate("/experience");
  };

  const handleFinish = () => {
    navigate("/");
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
