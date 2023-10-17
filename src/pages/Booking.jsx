import React, { useEffect, useState } from "react";
import Navbar from "../componenst/Navbar";
import Header from "../componenst/compbooking/Header";
import Cardbooking from "../componenst/compbooking/Cardbooking";
import Loadlabel from "../skeleton/Loadlabel";
import Databookinglapangan from "./Databookinglapangan";

export default function Booking() {
  const [load, setLoad] = useState(false);
  const [lapangan, setLapangan] = useState(true);
  const [databooking, setDatabooking] = useState(false);

  const handleLapangan = () => {
    setLapangan(true);
    setDatabooking(false);
  };
  const handledatabooking = () => {
    setLapangan(false);
    setDatabooking(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, 500);
  }, []);
  return (
    <div>
      <Navbar judul="Booking" aicon="true" />
      <Header />
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between fw-bold">
            {load ? (
              <label
                onClick={handleLapangan}
                className={lapangan ? "text-primary" : ""}
                style={{ cursor: "pointer" }}
              >
                Lapangan yang tersedia
              </label>
            ) : (
              <Loadlabel />
            )}

            <label>
              {load ? (
                <label
                  onClick={handledatabooking}
                  className={databooking ? "text-primary" : ""}
                  style={{ cursor: "pointer" }}
                >
                  Data booking anda
                </label>
              ) : (
                <Loadlabel />
              )}
            </label>
          </div>
          <hr />
          {lapangan ? <Cardbooking /> : <Databookinglapangan />}
        </div>
      </div>
    </div>
  );
}
