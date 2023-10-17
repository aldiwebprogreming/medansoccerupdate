import React, { useEffect, useState } from "react";
import Crousel from "./Crousel";
import Loadtabout from "../../skeleton/Loadtabout";
import Loadcrousel from "../../skeleton/Loadcrousel";

export default function Compabout() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);
  return (
    <div className="container my-3">
      {load ? (
        <>
          {" "}
          <Crousel />{" "}
        </>
      ) : (
        <Loadcrousel />
      )}

      {load ? (
        <>
          <div className="card shadow" style={{ border: "none" }}>
            <div className="card-header">
              <div class="d-flex justify-content-between">
                <p className="fw-bold">Tentang Medan Mini Soccer</p>
                <p className="text-danger">
                  <i className="fas fa-list"></i>
                </p>
              </div>
            </div>
            <div className="card-body text-secondary">
              <img
                src="img/benner1.png"
                class="img-fluid mb-3"
                alt=""
                style={{ borderRadius: "5px" }}
              ></img>
              Medan mini soccer adalah aplikasi bermain mini soccer yang
              mempunyai fasilitas lapangan terlengkap di kota medan, medan mini
              soccer mempunyai fitur booking lapangan, member karir dan
              statistik pemain, anda dapat bermain dengan mudah dan mendapatkan
              teman baru anda di medan mini soccer <br />
              <br></br>
              Ayooo buruan masyarakat medan bermain sekarang di medan mini
              soccer dan dapatkan teman baru anda di sini.
            </div>
          </div>
        </>
      ) : (
        <Loadtabout />
      )}
    </div>
  );
}
