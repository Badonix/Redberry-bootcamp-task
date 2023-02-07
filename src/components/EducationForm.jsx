import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
import validated from "../assets/validated.png";
import error from "../assets/error.png";
import axios from "axios";
import { useGlobalContext } from "../Context";
function EducationForm({ setIsValid, educationsKey, education, setEducation }) {
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
  // {
  //   "name": "დავით",
  //   "surname": "ონიანი",
  //   "email": "davitoniani@redberry.ge",
  //   "phone_number": "+995598123456",
  //   "experiences": [
  //     {
  //       "position": "back-end developer",
  //       "employer": "Redberry",
  //       "start_date": "2019/09/09",
  //       "due_date": "2020/09/23",
  //       "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum."
  //     }
  //   ],
  //   "educations": [
  //     {
  //       "institute": "თსუ",
  //       "degree": "სტუდენტი",
  //       "due_date": "2017/06/25",
  //       "description": "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ."
  //     }
  //   ],
  //   "image": "/storage/images/0rI7LyNRJRrokoSKUTb9EKvNuyYFKOvUmDQWoFt6.png",
  //   "about_me": "ეს არის აღწერა ჩემს შესახებ"
  // }

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
        {!isEducationValid && educationPlace?.length > 0 && (
          <img
            style={{
              position: "absolute",
              right: "10px",
            }}
            src={error}
          />
        )}
        {isEducationValid && (
          <img
            style={{ position: "absolute", right: "10px" }}
            src={validated}
          />
        )}

        <label
          className={
            !isEducationValid && educationPlace?.length > 0 && "error-color"
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
            isEducationValid
              ? "validated"
              : educationPlace?.length > 0 && "not-validated"
          }
          placeholder="სასწავლებელი"
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
                <option key={el.id} value={el.id}>
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
