import React from "react";
import { Link } from "react-router-dom";

export default function Compalert({ statuscode }) {
  return (
    <div>
      <div className="card" style={{ borderRadius: "0px" }}>
        <div className="card-body">
          {statuscode == 201 ? (
            <center>
              <img
                src="menunggu.svg"
                class="img-fluid"
                alt="..."
                style={{ height: "300px" }}
              ></img>
              <h5 className="mt-3 text-danger fw-bold">
                Hay, {localStorage.getItem("nama")}
              </h5>
              <p className="text-secondary">
                Status pembayaran member karir anda masih tertunda, silahkan
                menunggu persetujuan pembayaran anda
              </p>

              <br />
              {/* <button className="btn btn-danger mt-2">
                <i className="fas fa-mony"></i> Ulangi Pembayaran anda
              </button> */}
            </center>
          ) : (
            <center>
              {" "}
              <img
                src="sukses.svg"
                class="img-fluid"
                alt="..."
                style={{ height: "300px" }}
              ></img>
              <h5 className="mt-3 text-danger fw-bold">
                Hay, {localStorage.getItem("nama")}
              </h5>
              <p>
                Status pembayaran anda berhasil, sekarang anda dapat menentukan
                jadwal bermain anda
              </p>
              <Link to="/jadwalmemberkarir" style={{ textDecoration: "none" }}>
                Gunakan slot bermain anda sekarang{" "}
                <i className="fas fa-arrow-right"></i>
              </Link>
            </center>
          )}
        </div>
      </div>
    </div>
  );
}
