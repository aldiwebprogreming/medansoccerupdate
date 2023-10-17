import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Compdataasist() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [asist, setAsist] = useState(false);
  const [dataasist, setDataasist] = useState([]);
  const [jmlasist, setJmlasist] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        urlapi + "Listasist?id_user=" + localStorage.getItem("id")
      );
      setDataasist(response.data.data);
      setJmlasist(response.data.jml);
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div
        className={`d-flex justify-content-between ${
          asist ? "text-primary" : "text-secondary"
        }`}
      >
        <p>Assist</p>
        <p>
          <a
            style={{ textDecoration: "none" }}
            onClick={() => setAsist(!asist)}
          >
            {jmlasist.jml_asist ? jmlasist.jml_asist : 0} Assist{" "}
            <i
              className={asist ? "fas fa-chevron-down" : "fas fa-chevron-right"}
            ></i>
          </a>
        </p>
      </div>
      {asist ? (
        <div className="card border-primary">
          <div className="card card-body">
            {dataasist == false ? (
              <p className="text-center text-secondary">
                <i className="fas fa-trash"></i> Data Kosong
              </p>
            ) : (
              ""
            )}
            {dataasist.map((asist) => {
              return (
                <div key={asist.id}>
                  <div className="d-flex justify-content-between text-primary">
                    <small>
                      <i className="fas fa-people-arrows"></i> {asist.jml_asist}
                    </small>
                    <small>
                      <i className="fas fa-shield"></i> {asist.team}
                    </small>
                    <small>
                      <i className="fas fa-shield"></i> {asist.team} vs{" "}
                      {asist.lawan} <i className="fas fa-shield"></i>
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
