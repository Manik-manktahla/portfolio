import React from "react";

const PersonalInfo = (props) => {
  return (
    <div className="personalInfo">
      <h1 className="text-color-blue personal-header">About me</h1>
      <h1 className="mobile-padding">I am a {props.about.Role.toLowerCase()}</h1>
      {props.about.about_work.map((mess) => {
        return <p className="text-color-light mobile-padding">{mess}</p>;
      })}
    </div>
  );
};

export default PersonalInfo;
