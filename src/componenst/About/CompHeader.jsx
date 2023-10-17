import React from "react";

export default function CompHeader() {
  return (
    <div>
      <div
        className="card text-white"
        style={{
          borderRadius: "0px",
          backgroundColor: "#2b2e5a",
          color: "white",
        }}
      >
        <div className="container my-5">
          <h3 className="card-title mt-5">Tentang Medan Mini Soccer</h3>
          <p className="card-text">
            Apa yang kamu ketahui tentang medan mini soccer
          </p>
        </div>
      </div>
    </div>
  );
}
