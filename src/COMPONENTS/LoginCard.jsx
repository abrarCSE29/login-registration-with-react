import React from "react";
import Logo from "../ASSETS/PHOTOS/julogo.png";
export default function LoginCard() {
  return (
    <div className="">
      <div className="inlineflex flex-alignCenter paddingleft20">
        <img className="img-logo" src={Logo} alt="logo" />
        <div className="pageTitle fontstyle-bold">
          <p className="color-orange fontsize-3rem">
            Education Management System
          </p>
          <p className="color-blue fontsize-2rem">Jahangirnagar University</p>
        </div>
      </div>
    </div>
  );
}
