import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Compdataplay() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [play, setPlay] = useState(false);
  const [dataplay, setDataplay] = useState([]);
  const [jmlplay, setJmlplay] = useState(0);

  const getData = async () => {
    try {
      const response = await axios.get(
        urlapi + "Listmain?id_user=" + localStorage.getItem("id")
      );
      setDataplay(response.data.data);
      setJmlplay(response.data.jml);
    } catch (error) {
      //   console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div
        className={`d-flex justify-content-between ${
          play ? "text-primary" : "text-secondary"
        }`}
      >
        <p>Play</p>
        <p>
          <a style={{ textDecoration: "none" }} onClick={() => setPlay(!play)}>
            {jmlplay} Play{" "}
            <i
              className={play ? "fas fa-chevron-down" : "fas fa-chevron-right"}
            ></i>
          </a>
        </p>
      </div>
      {play ? (
        <div className="card border-primary">
          <div className="card card-body">
            {dataplay == false ? (
              <p className="text-center text-secondary">
                <i className="fas fa-trash"></i> Data Kosong
              </p>
            ) : (
              ""
            )}
            {dataplay.map((mm) => {
              return (
                <div key={mm.id}>
                  <div className="d-flex justify-content-between text-primary">
                    <small className="">
                      <i className="fa fa-calendar-day"></i> {mm.tgl_main}
                    </small>

                    <small className="">
                      <i className="fa fa-clock"></i> {mm.jam_main}
                    </small>

                    <small className="">
                      <i className="fas fa-shield"></i> {mm.team}
                    </small>
                    <small className="">
                      <i className="fas fa-shirt"></i> {mm.no_punggung}
                    </small>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
