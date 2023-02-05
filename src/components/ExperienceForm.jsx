import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import validated from "../assets/validated.png";
import error from "../assets/error.png";
import { useGlobalContext } from "../Context";
function ExperienceForm({
  setIsValid,
  experiencesKey,
  experiences,
  setExperiences,
}) {
  const [position, setPosition] = useState("");
  const [recruiter, setRecruiter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [isPositionValid, setIsPositionValid] = useState(false);
  const [isRecruiterValid, setIsRecruiterValid] = useState(false);
  useEffect(() => {
    const exp = JSON.parse(localStorage.getItem("experiences"))?.find(
      (el) => el.id == experiencesKey
    );
    if (exp) {
      setPosition(exp.position);
      setRecruiter(exp.recruiter);
      setStartDate(exp.startDate);
      setEndDate(exp.endDate);
      setDescription(exp.description);
    }
  }, []);
  useEffect(() => {
    // setExperiences((prev) => {
    //   return prev?.map((el) => {
    //     console.log(el);
    //     // if (el.id == experiencesKey) {
    //     //   return recruiter, position, startDate, endDate, description;
    //     // }
    //   });
    // });

    setExperiences((prev) => {
      return prev.map((el) => {
        if (el.id === experiencesKey) {
          return {
            position,
            recruiter,
            startDate,
            endDate,
            description,
            id: el.id,
          };
        } else {
          return el;
        }
      });
    });
    position?.length >= 2
      ? setIsPositionValid(true)
      : setIsPositionValid(false);
    recruiter?.length >= 2
      ? setIsRecruiterValid(true)
      : setIsRecruiterValid(false);
  }, [position, recruiter, startDate, endDate, description]);

  useEffect(() => {
    if (isPositionValid && isRecruiterValid && startDate && endDate) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [isPositionValid, isRecruiterValid, startDate, endDate]);
  const handleRemoveExperience = () => {
    const removedArray = experiences.filter((el) => el.id != experiencesKey);
    setExperiences(removedArray);
    setIsValid(true);
  };
  return (
    <>
      <div
        style={{
          position: "relative",
          padding: "20px 0px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {experiences.length > 1 && (
          <AiOutlineCloseCircle
            onClick={handleRemoveExperience}
            className="close-btn"
          />
        )}

        <div className="position-row">
          {!isPositionValid && position?.length > 0 && (
            <img
              style={{
                position: "absolute",
                right: "10px",
              }}
              src={error}
            />
          )}
          {isPositionValid && (
            <img
              style={{ position: "absolute", right: "10px" }}
              src={validated}
            />
          )}

          <label
            className={
              !isPositionValid && position?.length > 0 && "error-color"
            }
            htmlFor="position"
          >
            თანამდებობა
          </label>
          <input
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            type="text"
            id="position"
            className={
              isPositionValid
                ? "validated"
                : position?.length > 0 && "not-validated"
            }
            placeholder="დეველოპერი, დიზაინერი და ა.შ"
          />
          <p className="hint">მინიმუმ 2 სიმბოლო </p>
        </div>
        <div className="recruiter-row">
          {!isRecruiterValid && recruiter?.length > 0 && (
            <img
              style={{
                position: "absolute",
                right: "10px",
              }}
              src={error}
            />
          )}
          {isRecruiterValid && (
            <img
              style={{ position: "absolute", right: "10px" }}
              src={validated}
            />
          )}
          <label
            className={
              !isRecruiterValid && recruiter?.length > 0 && "error-color"
            }
            htmlFor="recruiter"
          >
            დამსაქმებელი
          </label>
          <input
            type="text"
            onChange={(e) => setRecruiter(e.target.value)}
            value={recruiter}
            id="recruiter"
            className={
              isRecruiterValid
                ? "validated"
                : recruiter?.length > 0 && "not-validated"
            }
            placeholder="დეველოპერი, დიზაინერი და ა.შ"
          />
          <p className="hint">მინიმუმ 2 სიმბოლო </p>
        </div>
        <div className="date-row">
          <div className="start-date">
            <label>დაწყების რიცხვი</label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
            />
          </div>
          <div className="end-date">
            <label>დამთავრების რიცხვი</label>
            <input
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
            />
          </div>
        </div>

        <div className="about-me-row">
          <label>აღწერა (არასავალდებულო)</label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
          ></textarea>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default ExperienceForm;
