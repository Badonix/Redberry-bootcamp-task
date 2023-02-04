import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
function ExperienceForm({
  experiencesKey,
  currentExperiences,
  setCurrentExperiences,
}) {
  const [position, setPosition] = useState("");
  const [recruiter, setRecruiter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setCurrentExperiences((prev) => {
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
  }, [position, recruiter, startDate, endDate, description]);

  const handleRemoveExperience = () => {
    const removedArray = currentExperiences.filter(
      (el) => el.id != experiencesKey
    );
    setCurrentExperiences(removedArray);
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
      {currentExperiences.length > 1 && (
        <AiOutlineCloseCircle
          onClick={handleRemoveExperience}
          className="close-btn"
        />
      )}

      <div className="position-row">
        <label htmlFor="position">თანამდებობა</label>
        <input
          onChange={(e) => setPosition(e.target.value)}
          value={position}
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
          onChange={(e) => setRecruiter(e.target.value)}
          value={recruiter}
          id="recruiter"
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
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
          value={description}
          placeholder={"როლი თანამდებობაზე და ზოგადი აღწერა"}
        ></textarea>
      </div>
      <hr></hr>
    </div>
  );
}

export default ExperienceForm;
