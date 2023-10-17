import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comteam() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [topscore, setTopscore] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(urlapi + "Topscore");
      setTopscore(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p className="fw-bold">Top Score Saat Ini </p>

      {topscore.map((ls, index) => {
        return (
          <div
            className="card flex-row shadow mt-3"
            key={index}
            style={{ border: "none" }}
          >
            <img
              src="pemain.png"
              className="card-img-left shadow"
              alt=""
              style={{ height: "100px" }}
            />
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="text-secondary" style={{ fontWeight: "bold" }}>
                  {ls.nama}
                </h5>{" "}
              </div>
              <p className="card-text text-danger fw-bold">
                <i className="fas fa-futbol"></i> {ls.total} Goal
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
