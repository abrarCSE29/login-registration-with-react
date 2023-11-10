import React from "react";
import Logo from "../ASSETS/PHOTOS/julogo.png";
export default function LoginCard() {
  return (
    <div className="inline-flex mxw-100">
      <img className="logo-100" src={Logo} alt="JUNIV" />
      <div className="pageTitle fontstyle-bold">
        <p className="color-orange fontsize-2rem">
          Education Management System
        </p>
        <p className="color-blue fontsize-1-5rem">Jahangirnagar University</p>
        <p>Savar, Dhaka, 1304</p>
      </div>
    </div>
  );
}
