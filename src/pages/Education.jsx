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
  const [currentEducations, setCurrentEducations] = useState([
    { id: nanoid() },
  ]);
  useEffect(() => {
    setEducation(currentEducations);
  }, [currentEducations]);
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
        <div className="form-cont">
          <form>
            {currentEducations.map((el) => {
              return (
                <EducationForm
                  key={el.id}
                  educationsKey={el.id}
                  currentEducations={currentEducations}
                  setCurrentEducations={setCurrentEducations}
                />
              );
            })}

            <button
              onClick={() =>
                setCurrentEducations((prev) => [...prev, { id: nanoid() }])
              }
              type="button"
              className="add-experience"
            >
              მეტი სასწავლებლის დამატება
            </button>
          </form>
        </div>
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
