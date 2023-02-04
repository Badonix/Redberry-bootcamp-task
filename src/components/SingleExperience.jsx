import React from "react";
import { useGlobalContext } from "../Context";
function SingleExperience({ _id }) {
  const { experience } = useGlobalContext();
  const exp = experience.find((el) => el.id == _id);
  return (
    <div className="single-experience">
      <div className="general-experience">
        <h4>
          {exp?.position}, {exp?.recruiter}
        </h4>
        <h5>
          {exp?.startDate} - {exp?.endDate}
        </h5>
      </div>
      <p>{exp?.description}</p>
    </div>
  );
}

export default SingleExperience;
