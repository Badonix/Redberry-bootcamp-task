import React from "react";
import man from "../assets/man.png";
import emailIcon from "../assets/email-icon.png";
import phone from "../assets/phone-num-icon.png";
import SingleExperience from "./SingleExperience";
import SingleEducation from "./SingleEducation";
import { useEffect, useState } from "react";
import cvWatermark from "../assets/cv-watermark.png";
import { useGlobalContext } from "../Context";
function Cv() {
  const {
    name,
    surname,
    email,
    about,
    phonenum,
    image,
    experiences,
    education,
  } = useGlobalContext();

  return (
    <section className="cv">
      <div className="top-cv">
        <div className="left">
          <h2>
            {name} {surname}
          </h2>
          <div className="contact">
            <div className="contact-item">
              {email && (
                <>
                  <img src={emailIcon} />
                  <p>{email}</p>
                </>
              )}
            </div>
            <div className="contact-item">
              {phonenum && (
                <>
                  <img src={phone} />
                  <p>{phonenum}</p>
                </>
              )}
            </div>
          </div>
          <div className="about-me">
            {about && (
              <>
                <h3>ჩემ შესახებ</h3>
                <p>{about}</p>
              </>
            )}
          </div>
        </div>
        {image && <img src={image} className="img" />}
      </div>
      {image && phonenum && email && name && surname && (
        <hr style={{ marginTop: "20px" }}></hr>
      )}
      {
        <div className="experience-section">
          <h3>გამოცდილება</h3>
          <div className="experiences">
            {experiences?.map((el) => {
              return <SingleExperience _id={el.id} />;
            })}
          </div>
        </div>
      }
      <hr style={{ marginTop: "20px" }}></hr>
      <div className="education-section">
        <h3>განათლება</h3>
        <div className="educations">
          {education?.map((el) => {
            return <SingleEducation _id={el.id} />;
          })}
        </div>
      </div>
      <img src={cvWatermark} className="cv-watermark" />
    </section>
  );
}

export default Cv;
