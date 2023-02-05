import React from "react";
import { useGlobalContext } from "../Context";
import { useState, useEffect } from "react";
function SingleEducation({ _id }) {
  const [ed, setEd] = useState();

  const { education } = useGlobalContext();
  useEffect(() => {
    setEd(education.find((el) => el.id == _id));
  }, [education]);
  return (
    <div className="single-education">
      {(ed?.educationPlace ||
        ed?.educationQuality ||
        ed?.endDate ||
        ed?.description) && (
        <>
          <div className="general-education">
            <h4>
              {ed?.educationPlace}, {ed?.educationQuality}
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
