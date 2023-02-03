import React from "react";
import Cv from "../components/Cv";
import BackToMenu from "../components/BackToMenu";
import { useNavigate } from "react-router-dom";
function Education() {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate("/experience");
  };

  const nextPage = () => {
    navigate("/");
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
        <form>
          <div className="position-row">
            <label htmlFor="position">თანამდებობა</label>
            <input
              type="text"
              id="position"
              placeholder="დეველოპერი, დიზაინერი და ა.შ"
            />
            <p className="hint">მინიმუმ 2 სიმბოლო </p>
          </div>
          <div className="recruiter-row">
            <label htmlFor="recruiter">დამსაქმებელი</label>
            <input
              type="text"
              id="recruiter"
              placeholder="დეველოპერი, დიზაინერი და ა.შ"
            />
            <p className="hint">მინიმუმ 2 სიმბოლო </p>
          </div>
          <div className="date-row">
            <div className="start-date">
              <label>დაწყების რიცხვი</label>
              <input type="date" />
            </div>
            <div className="end-date">
              <label>დამთავრების რიცხვი</label>
              <input type="date" />
            </div>
          </div>

          <div className="about-me-row">
            <label>აღწერა (არასავალდებულო)</label>
            <textarea
              placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
            ></textarea>
          </div>
          <hr></hr>
          <button className="add-experience">მეტი გამოცდილების დამატება</button>
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

export default Education;
