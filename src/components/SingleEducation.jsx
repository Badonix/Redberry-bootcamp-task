import React from "react";
import { useGlobalContext } from "../Context";
import { useState, useEffect } from "react";
function SingleEducation({ _id }) {
  const [ed, setEd] = useState();
  const [degree, setDegree] = useState("");
  const { education, degrees } = useGlobalContext();
  useEffect(() => {
    setEd(education.find((el) => el.id == _id));
  }, [education, degree]);
  useEffect(() => {
    degrees.forEach((el) => {
      if (el.id == ed?.educationQuality) {
        setDegree(el.title);
      }
    });
  }, [ed]);
  return (
    <div className="single-education">
      {(ed?.educationPlace ||
        ed?.educationQuality ||
        ed?.endDate ||
        ed?.description) && (
        <>
          <div className="general-education">
            <h4>
              {ed?.educationPlace}, {degree}
            </h4>
            <h5>{ed?.endDate}</h5>
          </div>
          <p>{ed?.description}</p>
        </>
      )}
    </div>
  );
}

export default SingleEducation;
