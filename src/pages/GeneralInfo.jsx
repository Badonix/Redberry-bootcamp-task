import React from "react";
import Cv from "../components/Cv";
import backbtn from "../assets/back-btn.png";
import { useNavigate } from "react-router-dom";
import BackToMenu from "../components/BackToMenu";
import { useGlobalContext } from "../Context";
function GeneralInfo() {
  const {
    setName,
    name,
    email,
    setEmail,
    surname,
    setSurname,
    setImage,
    about,
    setAbout,
    phonenum,
    setPhonenum,
  } = useGlobalContext();

  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/experience");
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <section className="generalinfo">
      <div className="private-info">
        <BackToMenu />
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
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                placeholder="ანზორ"
              />
              <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className="surname-row">
              <label htmlFor="surname">გვარი</label>
              <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                value={surname}
                id="surname"
                placeholder="მუმლაძე"
              />
              <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div className="img-upload-row">
            <input
              onChange={handleImageChange}
              id="upload-img"
              style={{ display: "none" }}
              type="file"
            />
            <label htmlFor="upload-img">პირადი ფოტოს ატვირთვა</label>
            <label className="upload-btn" htmlFor="upload-img">
              ატვირთვა
            </label>
          </div>
          <div className="about-me-row">
            <label>ჩემ შესახებ (არასავალდებულო)</label>
            <textarea
              onChange={(e) => setAbout(e.target.value)}
              value={about}
              placeholder={"ზოგადი ინფო შენს შესახებ"}
            ></textarea>
          </div>
          <div className="email-row">
            <label htmlFor="email">იმეილი</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              placeholder="anzor666@redberry.ge"
            />
            <p className="hint">უნდა მთავრდებოდეს @redberry.ge-თი</p>
          </div>
          <div className="phonenum-row">
            <label htmlFor="phonenum">მობილურის ნომერი</label>
            <input
              type="text"
              id="phonenum"
              onChange={(e) => setPhonenum(e.target.value)}
              value={phonenum}
              placeholder="+995 551 12 34 56"
            />
            <p className="hint">
              უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
            </p>
          </div>
        </form>
        <div className="next-btn-cont">
          <div></div>
          <div></div>
          <button onClick={handleNextPage}>შემდეგი</button>
        </div>
      </div>
      <Cv />
    </section>
  );
}

export default GeneralInfo;
