import React from "react";

export default function Headerbokinglapangan({ judul, title }) {
  return (
    <div>
      <div
        className="card text-white"
        style={{ borderRadius: "0px", backgroundColor: "#2b2e5a" }}
      >
        <div className="container my-5">
          <h3 className="card-title mt-4">{judul}</h3>
          <br></br>
          <br></br>

        </div>
      </div>
    </div>
  );
}
