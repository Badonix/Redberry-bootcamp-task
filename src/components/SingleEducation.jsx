import React from "react";
import { useGlobalContext } from "../Context";
function SingleEducation({ _id }) {
  const { education } = useGlobalContext();
  const ed = education.find((el) => el.id == _id);
  return (
    <div className="single-education">
      <div className="general-education">
        <h4>
          {ed?.educationPlace}, {ed?.educationQuality}
        </h4>
        <h5>{ed?.endDate}</h5>
      </div>
      <p>{ed?.description}</p>
    </div>
  );
}

export default SingleEducation;
