import React from "react";

export default function Compheader() {
  return (
    <div>
      <div
        className="card bg-danger text-white"
        style={{ borderRadius: "0px" }}
      >
        <div className="container my-5">
          <h3 className="card-title">Login ke akun anda</h3>
          <p className="card-text">
            Masukan email dan password anda dengna benar
          </p>
        </div>
      </div>
    </div>
  );
}
