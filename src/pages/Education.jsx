import React from "react";
import Cv from "../components/Cv";
import BackToMenu from "../components/BackToMenu";
import { useNavigate } from "react-router-dom";
function Education() {
  const navigate = useNavigate();

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
        <form>
          <div className="position-row">
            <label htmlFor="position">სასწავლებელი</label>
            <input
              type="text"
              id="position"
              placeholder="დეველოპერი, დიზაინერი და ა.შ"
            />
            <p className="hint">მინიმუმ 2 სიმბოლო </p>
          </div>
          <div className="date-row">
            <div className="start-date">
              <label htmlFor="quality">ხარისხი</label>
              <select id="quality">
                <option value="" selected disabled hidden>
                  აირჩიეთ ხარისხი
                </option>
                <option value="საშუალო სკოლის დიპლომი">
                  საშუალო სკოლის დიპლომი
                </option>
                <option value="ზოგადსაგანმანათლებლო დიპლომი">
                  ზოგადსაგანმანათლებლო დიპლომი
                </option>
                <option value="ბაკალავრი">ბაკალავრი</option>
                <option value="მაგისტრი">მაგისტრი</option>
                <option value="დოქტორი">დოქტორი</option>
                <option value="ასოცირებული ხარისხი">ასოცირებული ხარისხი</option>
                <option value="სტუდენტი">სტუდენტი</option>
                <option value="კოლეჯი (ხარისხის გარეშე)">
                  კოლეჯი (ხარისხის გარეშე)
                </option>
                <option value="სხვა">სხვა</option>
              </select>
            </div>
            <div className="end-date">
              <label>დამთავრების რიცხვი</label>
              <input type="date" />
            </div>
          </div>

          <div className="about-me-row">
            <label>აღწერა</label>
            <textarea placeholder={"განათლების აღწერა"}></textarea>
          </div>
          <hr></hr>
          <button className="add-experience">მეტი სასწავლებლის დამატება</button>
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
