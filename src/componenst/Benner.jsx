import React from "react";
import { Link } from "react-router-dom";

export default function Benner() {
  return (
    <div>
      <Link to={"/about"}>
        <img
          src="img/benner1.png"
          class="img-fluid"
          alt=""
          style={{ borderRadius: "5px" }}
        ></img>
      </Link>

      <hr />
      <Link to={"/booking"}>
        <img
          src="img/benner2.png"
          class="img-fluid"
          alt=""
          style={{ borderRadius: "5px" }}
        ></img>
      </Link>
    </div>
  );
}
