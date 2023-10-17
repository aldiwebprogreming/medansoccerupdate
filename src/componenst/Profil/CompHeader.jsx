import React from "react";

export default function CompHeader() {
  return (
    <div>
      <div
        className="card bg-danger text-white"
        style={{ borderRadius: "0px" }}
      >
        <div className="container my-5">
          <h3 className="card-title mt-5">Lengkapi profil anda</h3>
          <p className="card-text">
            Lengkapi profil anda terlebih dahulu untuk memulai aplikasi
          </p>
        </div>
      </div>
    </div>
  );
}
