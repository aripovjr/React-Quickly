import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);

  return (
    <>
      <h1>NotFound</h1>
      <p>
        Please wait, you will be taken to Home page automatically after 5
        seconds
      </p>
    </>
  );
}

export default NotFound;
