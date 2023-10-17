import { act } from "@testing-library/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Complawanmainhariini from "./Complawanmainhariini";

export default function Compmainhariini() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [team, setTeam] = useState([]);
  const [viewteam, setViewteam] = useState(false);
  const [viewlawan, setViewlawan] = useState(false);
  const [totalpemain, setTotalpemain] = useState(0);
  const [match, setMatch] = useState([]);

  const getTeam = async () => {
    try {
      const response = await axios.get(
        urlapi + "Mainhariini?id_user=" + localStorage.getItem("id")
      );

      setTeam(response.data.data);
      setTotalpemain(response.data.total_pemain);
    } catch (error) {
      console.log(error.message);
    }
  };

  const actionViewTeam = () => {
    setViewteam(!viewteam);
    setViewlawan(false);
  };

  const actionViewLawan = () => {
    setViewlawan(!viewlawan);
    setViewteam(false);
  };

  const pertandingan = async () => {
    try {
      const response = await axios.get(
        urlapi + "Pertandingan?id_user=" + localStorage.getItem("id")
      );
      setMatch(response.data);
    } catch (error) {
      // console.log("error.message");
    }
  };

  const colorTeam = (color) => {
    if (color == "Merah") {
      return "text-danger";
    } else if (color == "Biru") {
      return "text-primary";
    } else if (color == "Hitam") {
      return "text-dark";
    } else {
      return "text-secondary";
    }
  };

  const Alerslot = () => {
    if (totalpemain == 10) {
      return (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>Yess..</strong> Slot pemain team anda hari ini sudah terpenuhi
        </div>
      );
    } else if (totalpemain < 10) {
      // return (
      //   <div
      //     className="alert alert-warning alert-dismissible fade show"
      //     role="alert"
      //   >
      //     <strong>Upps..</strong> Slot pemain team anda hari ini belum terpenuhi
      //   </div>
      // );
    }
  };

  useEffect(() => {
    getTeam();
    pertandingan();
  }, []);

  return (
    <div>
      {match == "" ? (
        ""
      ) : (
        <div className="card mt-3 shadow" style={{ border: "none" }}>
          <div className="card-body text-secondary">
            <div className="d-flex justify-content-between">
              <h4>
                <i
                  className={`fa-solid fa-shield-halved ${colorTeam(
                    match.team
                  )}`}
                ></i>{" "}
                {match.team}
              </h4>

              <h4 className="fw-bold text-danger">VS</h4>

              <h4>
                <i
                  className={`fa-solid fa-shield-halved ${colorTeam(
                    match.lawan
                  )}`}
                ></i>{" "}
                {match.lawan}
              </h4>
            </div>

            <hr />
            <div className="d-flex justify-content-between">
              <Link
                to=""
                onClick={actionViewTeam}
                style={{ textDecoration: "none" }}
              >
                <p>Lihat team anda</p>
              </Link>

              <i
                onClick={actionViewTeam}
                className={
                  viewteam
                    ? "fas fa-chevron-down text-primary"
                    : "fas fa-chevron-right text-primary"
                }
                style={{ textDecoration: "none" }}
              ></i>

              {/* <Link
              to=""
              onClick={actionViewLawan}
              style={{ textDecoration: "none" }}
            >
              <p>
                Team lawan <i className="far fa-user"></i>
              </p>
            </Link> */}
            </div>

            {viewteam ? (
              <>
                <Alerslot />
                <div className="d-flex justify-content-between">
                  <p className="fw-bold">Team anda hari ini</p>
                  <p>
                    <i className="far fa-user"></i>
                  </p>
                </div>
                <hr />
                {team.map((list) => {
                  return (
                    <div key={list.id}>
                      <div className="mb-2">
                        <div className="d-flex justify-content-between">
                          <img
                            src="pemain.png"
                            class="img-fluid"
                            alt="Responsive image"
                            style={{ height: "50px" }}
                          ></img>

                          <p className="" style={{ marginLeft: "10px" }}>
                            Hay {localStorage.getItem("nama")}, saya adalah team
                            anda, apkah kamu ingin lihat statistik saya ?
                          </p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>
                            <i className="far fa-user"></i> {list.nama}
                          </p>

                          <p>
                            <i className="fas fa-shirt"></i> {list.no_punggung}
                          </p>

                          <p>
                            <i className="fas fa-chart-simple"></i> Statistik
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}

            {viewlawan ? (
              <div>
                <Complawanmainhariini />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
}
