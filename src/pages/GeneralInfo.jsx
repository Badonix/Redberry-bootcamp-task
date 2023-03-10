import React from "react";
import Cv from "../components/Cv";
import { useNavigate } from "react-router-dom";
import BackToMenu from "../components/BackToMenu";
import { useGlobalContext } from "../Context";
import { useState, useEffect } from "react";
import error from "../assets/error.png";
import validated from "../assets/validated.png";
function GeneralInfo() {
  const [isNameValidated, setIsNameValidated] = useState(false);
  const [isSurnameValidated, setIsSurnameValidated] = useState(false);
  const [isEmailValidated, setIsEmailValidated] = useState(false);
  const [isPhonenumValid, setIsPhonenumValid] = useState(false);
  const [isImageValidated, setIsImageValidated] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);
  const {
    setName,
    name,
    email,
    setEmail,
    surname,
    setSurname,
    setImage,
    image,
    about,
    setAbout,
    phonenum,
    setPhonenum,
    setFile,
  } = useGlobalContext();

  const navigate = useNavigate();
  const handleNextPage = () => {
    setHasClicked(true);
    if (
      isNameValidated &&
      isSurnameValidated &&
      isEmailValidated &&
      isPhonenumValid &&
      image
    ) {
      navigate("/experience");
    }

    if (!image) {
      setIsImageValidated(false);
    }
  };

  const handleImageChange = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      setImage(e.target.result);
      setFile(event.target.files[0]);
      localStorage.setItem("userImage", e.target.result);
      setIsImageValidated(true);
    };
  };
  const letters = "ქწერტყუიოპასდფგჰჯკლზხცვბნმჭღთშჟძჩ";
  useEffect(() => {
    if (name.length > 2) {
      setIsNameValidated(true);
      name.split("").forEach((el) => {
        !letters.includes(el) ? setIsNameValidated(false) : "";
      });
    } else {
      setIsNameValidated(false);
    }
    if (surname.length > 2) {
      setIsSurnameValidated(true);
      surname.split("").forEach((el) => {
        !letters.includes(el) ? setIsSurnameValidated(false) : "";
      });
    } else {
      setIsSurnameValidated(false);
    }
    if (email.length > 13) {
      setIsEmailValidated(true);
      if (!email.endsWith("@redberry.ge")) {
        setIsEmailValidated(false);
      }
    } else {
      setIsEmailValidated(false);
    }
    const pattern = /^(\+995)?(79\d{7}|5\d{8})$/;
    const regExp = new RegExp(pattern);
    const trimmedPhonenum = phonenum.replace(/\s/g, "");
    const isValid = regExp.test(trimmedPhonenum);
    setIsPhonenumValid(isValid);
  }, [name, surname, email, phonenum]);

  return (
    <section className="generalinfo">
      <div className="private-info">
        <BackToMenu />
        <div className="private-info-top-row">
          <div className="top-info">
            <div className="invis"></div>
            <h2>პირადი ინფო</h2>
            <p>1/3</p>
          </div>
          <div className="line"></div>
        </div>
        <form>
          <div className="form-first-row">
            <div className="name-row">
              {(name.length === 0 && hasClicked && (
                <img
                  src={hasClicked ? (isNameValidated ? validated : error) : ""}
                  style={{ position: "absolute", top: "36px", right: "10px" }}
                />
              )) ||
                (name.length > 0 && (
                  <img
                    src={
                      hasClicked
                        ? isNameValidated
                          ? validated
                          : error
                        : isNameValidated
                        ? validated
                        : error
                    }
                    style={{ position: "absolute", top: "36px", right: "10px" }}
                  />
                ))}

              <label
                htmlFor="name"
                className={
                  (!isNameValidated && name.length > 0 && "error-color") ||
                  (hasClicked &&
                    !isNameValidated &&
                    name.length == 0 &&
                    "error-color")
                }
              >
                სახელი
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                className={
                  hasClicked
                    ? isNameValidated
                      ? "validated"
                      : "not-validated"
                    : name.length > 0 && !isNameValidated
                    ? "not-validated"
                    : name.length == 0
                    ? ""
                    : "validated"
                }
                placeholder="ანზორ"
              />
              <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
            <div className="surname-row">
              {(surname.length === 0 && hasClicked && (
                <img
                  src={
                    hasClicked ? (isSurnameValidated ? validated : error) : ""
                  }
                  style={{ position: "absolute", top: "36px", right: "10px" }}
                />
              )) ||
                (surname.length > 0 && (
                  <img
                    src={
                      hasClicked
                        ? isSurnameValidated
                          ? validated
                          : error
                        : isSurnameValidated
                        ? validated
                        : error
                    }
                    style={{ position: "absolute", top: "36px", right: "10px" }}
                  />
                ))}

              <label
                className={
                  (!isSurnameValidated &&
                    surname.length > 0 &&
                    "error-color") ||
                  (hasClicked &&
                    !isSurnameValidated &&
                    surname.length == 0 &&
                    "error-color")
                }
                htmlFor="surname"
              >
                გვარი
              </label>
              <input
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                value={surname}
                id="surname"
                placeholder="მუმლაძე"
                className={
                  hasClicked
                    ? isSurnameValidated
                      ? "validated"
                      : "not-validated"
                    : surname.length > 0 && !isSurnameValidated
                    ? "not-validated"
                    : surname.length == 0
                    ? ""
                    : "validated"
                }
              />
              <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
            </div>
          </div>
          <div style={{ position: "relative" }} className="img-upload-row">
            {!isImageValidated && (
              <img
                src={error}
                style={{ position: "absolute", top: "2px", right: "-10px" }}
              />
            )}
            <input
              onChange={handleImageChange}
              id="upload-img"
              style={{ display: "none" }}
              type="file"
            />
            <label
              className={!isImageValidated && "error-color"}
              htmlFor="upload-img"
            >
              პირადი ფოტოს ატვირთვა
            </label>
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
          <div style={{ position: "relative" }} className="email-row">
            {(email.length === 0 && hasClicked && (
              <img
                src={hasClicked ? (isEmailValidated ? validated : error) : ""}
                style={{ position: "absolute", top: "41px", right: "10px" }}
              />
            )) ||
              (email.length > 0 && (
                <img
                  src={
                    hasClicked
                      ? isEmailValidated
                        ? validated
                        : error
                      : isEmailValidated
                      ? validated
                      : error
                  }
                  style={{ position: "absolute", top: "41px", right: "10px" }}
                />
              ))}
            <label
              className={
                (!isEmailValidated && email.length > 0 && "error-color") ||
                (hasClicked &&
                  !isEmailValidated &&
                  email.length == 0 &&
                  "error-color")
              }
              htmlFor="email"
            >
              იმეილი
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              className={
                hasClicked
                  ? isEmailValidated
                    ? "validated"
                    : "not-validated"
                  : email.length > 0 && !isEmailValidated
                  ? "not-validated"
                  : email.length == 0
                  ? ""
                  : "validated"
              }
              placeholder="anzor666@redberry.ge"
            />
            <p className="hint">უნდა მთავრდებოდეს @redberry.ge-თი</p>
          </div>
          <div className="phonenum-row" style={{ position: "relative" }}>
            {(phonenum.length === 0 && hasClicked && (
              <img
                src={hasClicked ? (isPhonenumValid ? validated : error) : ""}
                style={{ position: "absolute", top: "41px", right: "10px" }}
              />
            )) ||
              (phonenum.length > 0 && (
                <img
                  src={
                    hasClicked
                      ? isPhonenumValid
                        ? validated
                        : error
                      : isPhonenumValid
                      ? validated
                      : error
                  }
                  style={{ position: "absolute", top: "41px", right: "10px" }}
                />
              ))}
            <label
              className={
                (!isPhonenumValid && phonenum.length > 0 && "error-color") ||
                (hasClicked &&
                  !isPhonenumValid &&
                  phonenum.length == 0 &&
                  "error-color")
              }
              htmlFor="phonenum"
            >
              მობილურის ნომერი
            </label>
            <input
              type="text"
              id="phonenum"
              onChange={(e) => setPhonenum(e.target.value)}
              value={phonenum}
              placeholder="+995 551 12 34 56"
              className={
                hasClicked
                  ? isPhonenumValid
                    ? "validated"
                    : "not-validated"
                  : phonenum.length > 0 && !isPhonenumValid
                  ? "not-validated"
                  : phonenum.length == 0
                  ? ""
                  : "validated"
              }
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
