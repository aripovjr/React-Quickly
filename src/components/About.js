import React from "react";
import { useOutletContext } from "react-router-dom";

function About() {
  const myInfo = useOutletContext();
  const { name, surname, age, position } = myInfo;
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>{name}</li>
        <li>{surname}</li>
        <li>{age}</li>
        <li>{position}</li>
      </ul>
    </div>
  );
}

export default About;
