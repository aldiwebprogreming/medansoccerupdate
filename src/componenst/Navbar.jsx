import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ judul, aicon }) {
  return (
    <div>
      <div
        className="card shadow fixed-top mb-2"
        style={{
          position: "fixed",
          zIndex: "9999",
          height: "50px",

          backgroundColor: "#2b2e5a",
          border: "0px",
          borderRadius: "0px",
          color: "white",
        }}
      >
        <div className="container">
          <div
            className="d-flex justify-content-between"
            style={{ marginTop: "12px" }}
          >
            <Link to="/home" className="navbar-brand text-white" href="#">
              <b>
                {" "}
                {aicon == "true" ? (
                  <i className="fas fa-arrow-left"></i>
                ) : (
                  ""
                )}{" "}
                {judul}
              </b>
            </Link>

            {/* <a
              className="navbar-brand text-white"
              href="#"
              style={{ position: "relative", left: "420px" }}
            >
              Aldi
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
