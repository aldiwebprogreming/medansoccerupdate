import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Compdatagoal() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [goal, setGoal] = useState(false);
  const [datagoal, setDatagoal] = useState([]);
  const [jmlgoal, setJmlgoal] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        urlapi + "Listgoal?id_user=" + localStorage.getItem("id")
      );
      setDatagoal(response.data.data);
      setJmlgoal(response.data.jml);
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
          goal ? "text-primary" : "text-secondary"
        }`}
      >
        <p>Goal</p>
        <p>
          <a style={{ textDecoration: "none" }} onClick={() => setGoal(!goal)}>
            {jmlgoal.jml_goal ? jmlgoal.jml_goal : 0} Goal{" "}
            <i
              className={goal ? "fas fa-chevron-down" : "fas fa-chevron-right"}
            ></i>
          </a>
        </p>
      </div>
      {goal ? (
        <div className="card border-primary">
          <div className="card card-body">
            {datagoal == false ? (
              <p className="text-center text-secondary">
                <i className="fas fa-trash"></i> Data Kosong
              </p>
            ) : (
              ""
            )}

            {datagoal.map((goal) => {
              return (
                <div key={goal.id}>
                  <div className="d-flex justify-content-between text-primary">
                    <small>
                      <i className="fas fa-futbol"></i> {goal.jml_goal}
                    </small>
                    <small>
                      <i className="fas fa-shield"></i> {goal.team}
                    </small>
                    <small>
                      <i className="fas fa-shield"></i> {goal.team} vs{" "}
                      {goal.lawan} <i className="fas fa-shield"></i>
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
