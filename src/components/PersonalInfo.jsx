import React from "react";

const PersonalInfo = (props) => {
  return (
    <div className="personalInfo">
      <h1 className="text-color-blue">About me</h1>
      <h1>I am a {props.about.Role.toLowerCase()}</h1>
      {props.about.about_work.map((mess) => {
        return <p className="text-color-light">{mess}</p>;
      })}
    </div>
  );
};

export default PersonalInfo;
