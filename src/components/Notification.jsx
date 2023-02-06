import React from "react";
import { GrClose } from "react-icons/gr";
function Notification({ setIsNotifShowing }) {
  return (
    <div className="notification">
      <div className="notif-cont">
        <GrClose
          onClick={() => setIsNotifShowing(false)}
          className="close-icon"
        />
        <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
      </div>
    </div>
  );
}

export default Notification;
