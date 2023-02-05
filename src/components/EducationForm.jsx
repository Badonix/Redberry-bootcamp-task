import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import axios from "axios";
function EducationForm({
  educationsKey,
  currentEducations,
  setCurrentEducations,
}) {
  const [educationPlace, setEducationPlace] = useState("");
  const [educationQuality, setEducationQuality] = useState("");
  const [endDate, setEndDate] = useState("");
  const [degrees, setDegrees] = useState([]);
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get("https://resume.redberryinternship.ge/api/degrees")
      .then((res) => setDegrees(res.data));
  }, []);
  useEffect(() => {
    setCurrentEducations((prev) => {
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
  }, [educationPlace, educationQuality, endDate, description]);

  const handleRemoveEducation = () => {
    const removedArray = currentEducations.filter(
      (el) => el.id != educationsKey
    );
    setCurrentEducations(removedArray);
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
      {currentEducations.length > 1 && (
        <AiOutlineCloseCircle
          onClick={handleRemoveEducation}
          className="close-btn"
        />
      )}
      <div className="position-row">
        <label htmlFor="position">სასწავლებელი</label>
        <input
          onChange={(e) => setEducationPlace(e.target.value)}
          value={educationPlace}
          type="text"
          id="position"
          placeholder="დეველოპერი, დიზაინერი და ა.შ"
        />
        <p className="hint">მინიმუმ 2 სიმბოლო </p>
      </div>
      <div className="date-row">
        <div className="start-date">
          <label htmlFor="quality">ხარისხი</label>
          <select
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
                <option key={el.id} value={el.title}>
                  {el.title}
                </option>
              );
            })}
          </select>
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
        <label>აღწერა</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={"განათლების აღწერა"}
        ></textarea>
      </div>
      <hr></hr>
    </div>
  );
}

export default EducationForm;
