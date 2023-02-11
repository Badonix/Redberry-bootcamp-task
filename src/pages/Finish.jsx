import React, { useEffect, useState } from "react";
import Notification from "../components/Notification";
import { useGlobalContext } from "../Context";
import emailIcon from "../assets/email-icon.png";
import phoneIcon from "../assets/phone-num-icon.png";
import axios from "axios";
import Loader from "../components/Loader";
import { nanoid } from "nanoid";
import cvWatermark from "../assets/cv-watermark.png";
import BackToMenu from "../components/BackToMenu";
function Finish() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [isNotifShowing, setIsNotifShowing] = useState(true);
  const {
    name,
    setName,
    setSurname,
    setAbout,
    setImage,
    setEducation,
    setEmail,
    setPhonenum,
    setExperiences,
    surname,
    about,
    image,
    education,
    email,
    phonenum,
    setFile,
    experiences,
  } = useGlobalContext();

  function changeKeys(obj, keyMap) {
    const newObj = {};

    // Function to edit keys of objects (for api schema)
    for (const key in obj) {
      // If the key is in the keyMap, use the mapped value as the new key
      let newKey = key;
      if (keyMap.hasOwnProperty(key)) {
        newKey = keyMap[key];
      }

      // If the value is an object, recursively call changeKeys
      if (typeof obj[key] === "object") {
        newObj[newKey] = changeKeys(obj[key], keyMap);
      } else {
        newObj[newKey] = obj[key];
      }
    }

    return newObj;
  }

  //function to post data (has to make it because of decoding image from base64)
  const postData = (data) => {
    axios
      .post("https://resume.redberryinternship.ge/api/cvs", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    setLoading(true);

    const mapping = {
      education: "educations",
      phonenum: "phone_number",
      recruiter: "employer",
      startDate: "start_date",
      about: "about_me",
      endDate: "due_date",
      educationPlace: "institute",
      educationQuality: "degree_id",
    };
    const updatedData = changeKeys(
      {
        name,
        surname,
        about,
        education,
        email,
        phonenum: phonenum.replace(/\s/g, ""),
        experiences,
        image,
      },
      mapping
    );

    //decoding image from base64
    const savedImage = localStorage.getItem("userImage");
    fetch(savedImage)
      .then((res) => res.blob())
      .then((blob) => {
        const newFile = new File([blob], "File Name", { type: "image/png" });
        updatedData.image = newFile;
        postData(updatedData);
        setName("");
        setSurname("");
        setAbout("");
        setImage("");
        setEducation([{ id: nanoid() }]);
        setEmail("");
        setPhonenum("");
        setExperiences([{ id: nanoid() }]);
        setFile("");
        localStorage.clear();
      });
  }, []);

  return (
    <div className="finished-page">
      <BackToMenu className="back-btn" />
      {loading ? (
        <Loader />
      ) : (
        <>
          {isNotifShowing && (
            <Notification setIsNotifShowing={setIsNotifShowing} />
          )}
          <section className="cv">
            <div className="top-cv">
              <div className="left">
                <h2>
                  {data?.name} {data?.surname}
                </h2>
                <div className="contact">
                  <div className="contact-item">
                    <img src={emailIcon} />
                    <p>{data?.email}</p>
                  </div>
                  <div className="contact-item">
                    <img src={phoneIcon} />
                    <p>{data?.phone_number}</p>
                  </div>
                </div>
                <div className="about-me">
                  <h3>ჩემ შესახებ</h3>
                  <p>{data?.about_me} </p>
                </div>
              </div>
              <img
                src={`https://resume.redberryinternship.ge/${data?.image}`}
                className="img"
              />
            </div>

            <hr style={{ marginTop: "20px" }}></hr>

            <div className="experience-section">
              <h3>გამოცდილება</h3>
              <div className="experiences">
                {data?.experiences.map((el) => {
                  return (
                    <div className="single-experience">
                      <div className="general-experience">
                        <h4>
                          {el?.position}, {el?.employer}
                        </h4>
                        <h5>
                          {el?.start_date} - {el?.due_date}
                        </h5>
                      </div>
                      <p>{el?.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <hr style={{ marginTop: "20px" }}></hr>
            <div className="education-section">
              <h3>განათლება</h3>
              <div className="educations">
                {data?.educations.map((el) => {
                  return (
                    <div className="single-education">
                      <div className="general-education">
                        <h4>
                          {el.institute}, {el.degree}
                        </h4>
                        <h5>{el.due_date}</h5>
                      </div>
                      <p>{el.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <img src={cvWatermark} className="cv-watermark" />
          </section>
        </>
      )}
    </div>
  );
}

export default Finish;
