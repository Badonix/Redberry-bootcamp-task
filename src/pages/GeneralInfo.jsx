import React from "react";
import Cv from "../components/Cv";
import backbtn from "../assets/back-btn.png";
function GeneralInfo() {
  return (
    <section className="generalinfo">
      <div className="private-info">
        <img className="back-btn" src={backbtn} />
        <div className="private-info-top-row">
          <div className="top-info">
            <h2>პირადი ინფო</h2>
            <p>1/3</p>
          </div>
          <div className="line"></div>
        </div>
        <form>
          <div className="form-first-row">
            <div className="name-row">
              <label htmlFor="name">სახელი</label>
              <input type="text" id="name" placeholder="ანზორ" />
              <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className="surname-row">
              <label htmlFor="surname">გვარი</label>
              <input type="text" id="surname" placeholder="მუმლაძე" />
              <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div className="img-upload-row">
            <input id="upload-img" style={{ display: "none" }} type="file" />
            <label htmlFor="upload-img">პირადი ფოტოს ატვირთვა</label>
            <label className="upload-btn" htmlFor="upload-img">
              ატვირთვა
            </label>
          </div>
          <div className="about-me-row">
            <label>ჩემ შესახებ (არასავალდებულო)</label>
            <textarea placeholder={"ზოგადი ინფო შენს შესახებ"}></textarea>
          </div>
          <div className="email-row">
            <label htmlFor="email">იმეილი</label>
            <input type="email" id="email" placeholder="anzor666@redberry.ge" />
            <p className="hint">უნდა მთავრდებოდეს @redberry.ge-თი</p>
          </div>
          <div className="phonenum-row">
            <label htmlFor="phonenum">მობილურის ნომერი</label>
            <input type="text" id="phonenum" placeholder="+995 551 12 34 56" />
            <p className="hint">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
        </form>
        <div className="next-btn-cont">
          <div></div>
          <div></div>
          <button>შემდეგი</button>
        </div>
      </div>
    </section>
  );
}

export default GeneralInfo;
