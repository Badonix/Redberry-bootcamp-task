import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
function SingleExperience({ _id }) {
  const [exp, setExp] = useState();
  const { experiences } = useGlobalContext();
  useEffect(() => {
    setExp(experiences.find((el) => el.id == _id));
  }, [experiences]);
  return (
    <div className="single-experience">
      {(exp?.position ||
        exp?.recruiter ||
        exp?.startDate ||
        exp?.endDate ||
        exp?.description) && (
        <>
          <div className="general-experience">
            <h4>
              {exp?.position}, {exp?.recruiter}
            </h4>
            <h5>
              {exp?.startDate} - {exp?.endDate}
            </h5>
          </div>
          <p>{exp?.description}</p>
        </>
      )}
    </div>
  );
}

export default SingleExperience;
