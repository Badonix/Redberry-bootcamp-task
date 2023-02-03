import React from "react";
import man from "../assets/man.png";
import email from "../assets/email-icon.png";
import phone from "../assets/phone-num-icon.png";
function Cv() {
  return (
    <section className="cv">
      <div className="top-cv">
        <div className="left">
          <h2>ანზორ მუმლაძე</h2>
          <div className="contact">
            <div className="contact-item">
              <img src={email} />
              <p>anzor666@redberry.ge</p>
            </div>
            <div className="contact-item">
              <img src={phone} />
              <p>+995 551 12 34 56</p>
            </div>
          </div>
          <div className="about-me">
            <h3>ჩემ შესახებ</h3>
            <p>
              ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
              გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.
            </p>
          </div>
        </div>
        <img src={man} className="img" />
      </div>
      <hr style={{ marginTop: "20px" }}></hr>
    </section>
  );
}

export default Cv;
