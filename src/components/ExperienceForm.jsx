import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import validated from "../assets/validated.png";
import error from "../assets/error.png";
import { useGlobalContext } from "../Context";
function ExperienceForm({
  experiencesKey,
  experiences,
  setExperiences,
  hasClicked,
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

  const handleRemoveExperience = () => {
    const removedArray = experiences.filter((el) => el.id != experiencesKey);
    setExperiences(removedArray);
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
        {experiences?.length > 1 && (
          <AiOutlineCloseCircle
            onClick={handleRemoveExperience}
            className="close-btn"
          />
        )}

        <div className="position-row">
          {(position?.length === 0 && hasClicked && (
            <img
              src={hasClicked ? (isPositionValid ? validated : error) : ""}
              style={{ position: "absolute", top: "36px", right: "10px" }}
            />
          )) ||
            (position?.length > 0 && (
              <img
                src={
                  hasClicked
                    ? isPositionValid
                      ? validated
                      : error
                    : isPositionValid
                    ? validated
                    : error
                }
                style={{ position: "absolute", top: "36px", right: "10px" }}
              />
            ))}

          <label
            className={
              (!isPositionValid && position?.length > 0 && "error-color") ||
              (hasClicked &&
                !isPositionValid &&
                position?.length == 0 &&
                "error-color")
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
              hasClicked
                ? isPositionValid
                  ? "validated"
                  : "not-validated"
                : position?.length > 0 && !isPositionValid
                ? "not-validated"
                : !position
                ? ""
                : "validated"
            }
            placeholder="დეველოპერი, დიზაინერი და ა.შ"
          />
          <p className="hint">მინიმუმ 2 სიმბოლო </p>
        </div>
        <div className="recruiter-row">
          {(recruiter?.length === 0 && hasClicked && (
            <img
              src={hasClicked ? (isRecruiterValid ? validated : error) : ""}
              style={{ position: "absolute", top: "36px", right: "10px" }}
            />
          )) ||
            (recruiter?.length > 0 && (
              <img
                src={
                  hasClicked
                    ? isRecruiterValid
                      ? validated
                      : error
                    : isRecruiterValid
                    ? validated
                    : error
                }
                style={{ position: "absolute", top: "36px", right: "10px" }}
              />
            ))}
          <label
            className={
              (!isRecruiterValid && recruiter?.length > 0 && "error-color") ||
              (hasClicked &&
                !isRecruiterValid &&
                recruiter?.length == 0 &&
                "error-color")
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
              hasClicked
                ? isRecruiterValid
                  ? "validated"
                  : "not-validated"
                : recruiter?.length > 0 && !isRecruiterValid
                ? "not-validated"
                : !recruiter
                ? ""
                : "validated"
            }
            placeholder="დეველოპერი, დიზაინერი და ა.შ"
          />
          <p className="hint">მინიმუმ 2 სიმბოლო </p>
        </div>
        <div className="date-row">
          <div className="start-date">
            <label className={hasClicked && !startDate && "error-color"}>
              დაწყების რიცხვი
            </label>
            <input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              className={
                startDate ? "validated" : hasClicked ? "not-validated" : ""
              }
            />
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
            className={
              description ? "validated" : hasClicked ? "not-validated" : ""
            }
          ></textarea>
        </div>
        <hr></hr>
      </div>
    </>
  );
}

export default ExperienceForm;
