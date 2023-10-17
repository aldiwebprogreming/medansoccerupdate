import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Liga({ id }) {
  const [score, setScore] = useState([]);

  const getScore = async () => {
    try {
      const response = await axios.get(
        "http://livescore-api.com/api-client/scores/history.json?from=2023-08-27&key=KUkqS41OTxrEPyZI&secret=0zkGxFaa3tVUzT5jNpKFuLuojV29u1Su&competition_id=" +
          id
      );

      console.log(response.data.data.match);
      setScore(response.data.data.match);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getScore();
  }, []);

  return (
    <div className="container" style={{ position: "relative", bottom: "30px" }}>
      <div className="card shadow">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="text-danger">Update Score Liga Inggris</p>
            <p className="text-danger">
              <i className="fas fa-futbol"></i>
            </p>
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
                  <small className="text-primary">{lt.location}</small>
                </div>
                <div className="col-sm-4 col-4" style={{ textAlign: "right" }}>
                  <p>{lt.away_name}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
