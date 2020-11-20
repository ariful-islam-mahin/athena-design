import React from "react";
import "./what.css";
import experience from "../../images/Group 65@2x.png";
import Interface from "../../images/Group 66@2x.png";
import Prototyping from "../../images/Group 69@2x.png";
import illustration from "../../images/Group 72@2x.png";
import bg from "../../images/bgString (1).png";

const What = () => {
  return (
    <div style={{ backgroundColor: "#FAFFFD" }} className="pt-5 pb-5  ">
      <div className="bg-string">
        <div className="pt-5" style={{ textAlign: "center" }}>
          <h1 className="what" style={{ fontFamily: "Yeseva One" }}>
            What we do
          </h1>
          <p className="what-focus">
            Our main focus is to make the User Experience very{" "}
            <span> simple and easy.Simplicity is our Strength.</span>
          </p>
        </div>
        <div className="pl-5 pr-5 pt-2">
          <div className=" row pt-5">
            <div className="col-md-3 text-center hover  p-5 box">
              <img src={experience} alt="" />
              <div className="pt-3">
                <h4>Experience Design</h4>
                <p className="desing">
                  The point of using Lorem{" "}
                  <span>ispum is that it has a more-or-</span>{" "}
                  <span>less normal</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 text-center hover  p-5 box">
              <img src={Interface} alt="" />
              <div className="pt-3">
                <h4>Interface Desing</h4>
                <p className="desing">
                  The point of using Lorem{" "}
                  <span>ispum is that it has a more-or-</span>{" "}
                  <span>less normal</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 text-center hover p-5 box">
              <img src={Prototyping} alt="" />
              <div className="pt-3">
                <h4>Prototyping</h4>
                <p className="desing">
                  The point of using Lorem{" "}
                  <span>ispum is that it has a more-or-</span>{" "}
                  <span>less normal</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 text-center hover  p-5 box">
              <img src={illustration} alt="" />
              <div className="pt-3">
                <h4>Illustration</h4>
                <p className="desing">
                  The point of using Lorem{" "}
                  <span>ispum is that it has a more-or-</span>{" "}
                  <span>less normal</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//hover section in the what.css file

export default What;
