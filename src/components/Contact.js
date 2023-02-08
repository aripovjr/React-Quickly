import React from "react";
import { Link, useParams } from "react-router-dom";

function Contact() {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact {id} </h1>
      <Link to="/contact/1">Contact 1</Link>
      <Link to="/contact/2">Contact 2</Link>
    </div>
  );
}

export default Contact;
