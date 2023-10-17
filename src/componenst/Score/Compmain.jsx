import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Compmain() {
  const [score, setScore] = useState([]);
  const [idliga, setIdliga] = useState("2");
  const [negara, setNegara] = useState("Inggris");

  const date = new Date();
  let tgl = new Date();
  let format_tgl =
    tgl.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    (tgl.getDate() - 3);

  const [tglsrc, setTglsrc] = useState(format_tgl);

  const resvonsive = {
    0: {
      items: 2.5,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3.5,
    },
  };

  const handleLiga = (liga, negara) => {
    setIdliga(liga);
    setNegara(negara);
    getScore(liga, format_tgl);
  };

  const getScore = async (liga, tgl) => {
    try {
      const response = await axios.get(
        "http://livescore-api.com/api-client/scores/history.json?from=" +
          tgl +
          "&key=KUkqS41OTxrEPyZI&secret=0zkGxFaa3tVUzT5jNpKFuLuojV29u1Su&competition_id=" +
          liga
      );

      console.log(response.data.data.match);
      setScore(response.data.data.match);
    } catch (error) {
      console.log(error.message);
      getScore(liga);
    }
  };

  const handleDate = (event) => {
    const date = event.target.value;
    // setScore([]);
    setTglsrc(date);
    getScore(idliga, date);
  };

  useEffect(() => {
    getScore(idliga, format_tgl);
  }, []);

  return (
    <div>
      <div
        className="container"
        style={{ position: "relative", bottom: "50px" }}
      >
        <div className="card shadow">
          <div className="card-body">
            <div class="d-flex justify-content-between">
              <p>Competition </p>
              <p>
                <i className="fas fa-list"></i>
              </p>
            </div>
            <OwlCarousel
              className="owl-theme"
              responsive={resvonsive}
              loop
              margin={10}
              dots={true}
            >
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("2", "Inggris")}
                  style={{ borderColor: "red", cursor: "pointer" }}
                >
                  <div className="card-body">
                    <p>Liga Inggris EPL</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("3", "Spanyol")}
                  style={{ borderColor: "red" }}
                >
                  <div className="card-body">
                    <p>Liga Spanyol</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("4", "Italya")}
                  style={{ borderColor: "red" }}
                >
                  <div className="card-body">
                    <p>Liga Italya Seri A</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("1", "Germany")}
                  style={{ borderColor: "red" }}
                >
                  <div className="card-body">
                    <p>Liga Germany</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("5", "France")}
                  style={{ borderColor: "red" }}
                >
                  <div className="card-body">
                    <p>Liga France lg-1</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("196", "Belanda")}
                  style={{ borderColor: "red" }}
                >
                  <div className="card-body">
                    <p>Liga Belanda</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div
                  className="card"
                  onClick={(e) => handleLiga("27", "Indonesia")}
                  style={{ borderColor: "red" }}
                >
                  <div className="card-body">
                    <p>Liga 1 Indonesia</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ position: "relative", bottom: "30px" }}
      >
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="text-danger">Update Score Liga {negara}</p>

              <div>
                <input
                  type="date"
                  className="form-control"
                  value={tglsrc}
                  onChange={(e) => handleDate(e)}
                />
              </div>
            </div>
            <hr />
            {score.map((lt) => {
              return (
                <div className="row text-secondary" key={lt.added}>
                  <div className="col-sm-4 col-4 text-left">
                    <p>{lt.home_name}</p>
                  </div>
                  <div className="col-sm-4 col-4 text-center">
                    <div className="card border-danger mb">
                      <p className="text-danger fw-bold my-2">{lt.score}</p>
                    </div>
                    <small className="text-primary">{lt.location}</small> <br />
                    <small className="text-primary">{lt.date}</small>
                  </div>
                  <div
                    className="col-sm-4 col-4"
                    style={{ textAlign: "right" }}
                  >
                    <p>{lt.away_name}</p>
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
