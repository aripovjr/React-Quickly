import React from "react";
import { Outlet } from "react-router-dom";

function Home() {
  const myInfo = {
    name: "Jasur",
    surname: "Aripov",
    age: 17,
    position: "Frontend Developer",
  };

  return (
    <div>
      <h1></h1>
      <Outlet context={myInfo}></Outlet>
    </div>
  );
}

export default Home;
