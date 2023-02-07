import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import validated from "../assets/validated.png";
import error from "../assets/error.png";
import axios from "axios";
import { useGlobalContext } from "../Context";
function EducationForm({
  hasClicked,
  setIsValid,
  educationsKey,
  education,
  setEducation,
}) {
  const [educationPlace, setEducationPlace] = useState("");
  const [educationQuality, setEducationQuality] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [isEducationValid, setIsEducationValid] = useState();
  const { degrees } = useGlobalContext();
  useEffect(() => {
    const edu = JSON.parse(localStorage.getItem("education"))?.find(
      (el) => el.id == educationsKey
    );
    if (edu) {
      setEducationPlace(edu.educationPlace);
      setEducationQuality(edu.educationQuality);
      setEndDate(edu.endDate);
      setDescription(edu.description);
    }
  }, []);

  useEffect(() => {
    setEducation((prev) => {
      return prev.map((el) => {
        if (el.id === educationsKey) {
          return {
            educationPlace,
            educationQuality,
            endDate,
            description,
            id: el.id,
          };
        } else {
          return el;
        }
      });
    });
    educationPlace?.length >= 2
      ? setIsEducationValid(true)
      : setIsEducationValid(false);
  }, [educationPlace, educationQuality, endDate, description]);

  useEffect(() => {
    if (isEducationValid && endDate && educationQuality && endDate) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isEducationValid, endDate, educationQuality, description]);
  const handleRemoveEducation = () => {
    const removedArray = education.filter((el) => el.id != educationsKey);
    setEducation(removedArray);
    setIsValid(true);
  };
  return (
    <div
      style={{
        position: "relative",
        padding: "20px 0px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {education.length > 1 && (
        <AiOutlineCloseCircle
          onClick={handleRemoveEducation}
          className="close-btn"
        />
      )}
      <div className="position-row">
        {(educationPlace?.length === 0 && hasClicked && (
          <img
            src={hasClicked ? (isEducationValid ? validated : error) : ""}
            style={{ position: "absolute", top: "36px", right: "10px" }}
          />
        )) ||
          (educationPlace?.length > 0 && (
            <img
              src={
                hasClicked
                  ? isEducationValid
                    ? validated
                    : error
                  : isEducationValid
                  ? validated
                  : error
              }
              style={{ position: "absolute", top: "36px", right: "10px" }}
            />
          ))}

        <label
          className={
            (!isEducationValid &&
              educationPlace?.length > 0 &&
              "error-color") ||
            (hasClicked &&
              !isEducationValid &&
              !educationPlace &&
              "error-color")
          }
          htmlFor="position"
        >
          სასწავლებელი
        </label>
        <input
          onChange={(e) => setEducationPlace(e.target.value)}
          value={educationPlace}
          type="text"
          id="position"
          className={
            hasClicked
              ? isEducationValid
                ? "validated"
                : "not-validated"
              : educationPlace?.length > 0 && !isEducationValid
              ? "not-validated"
              : !educationPlace
              ? ""
              : "validated"
          }
          placeholder="სასწავლებელი"
        />
        <p className="hint">მინიმუმ 2 სიმბოლო </p>
      </div>
      <div className="date-row">
        <div className="start-date">
          <label
            className={educationQuality ? "" : hasClicked ? "error-color" : ""}
            htmlFor="quality"
          >
            ხარისხი
          </label>
          <select
            className={
              educationQuality ? "validated" : hasClicked ? "not-validated" : ""
            }
            value={educationQuality}
            onChange={(e) => setEducationQuality(e.target.value)}
            defaultValue={"აირჩიეთ ხარისხი"}
            id="quality"
          >
            <option value={"აირჩიეთ ხარისხი"} hidden>
              აირჩიეთ ხარისხი
            </option>
            {degrees.map((el) => {
              return (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="end-date">
          <label className={hasClicked && !endDate && "error-color"}>
            დამთავრების რიცხვი
          </label>
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            className={
              endDate ? "validated" : hasClicked ? "not-validated" : ""
            }
          />
        </div>
      </div>
      <div className="about-me-row" style={{ position: "relative" }}>
        {(!description && hasClicked && (
          <img
            src={error}
            style={{ position: "absolute", top: "36px", right: "10px" }}
          />
        )) ||
          (description && (
            <img
              src={validated}
              style={{ position: "absolute", top: "36px", right: "10px" }}
            />
          ))}
        <label className={hasClicked && !description && "error-color"}>
          აღწერა
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={"განათლების აღწერა"}
          className={
            description ? "validated" : hasClicked ? "not-validated" : ""
          }
        ></textarea>
      </div>
      <hr></hr>
    </div>
  );
}

export default EducationForm;
