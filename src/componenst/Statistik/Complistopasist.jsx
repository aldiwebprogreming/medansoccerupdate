import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Complistopasist() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [asist, setAsist] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(urlapi + "Topassist");
      setAsist(response.data);
    } catch (error) {
      // console.log(error.message);
    }
  };

  const Getmain = ({ iduser }) => {
    const [jmmain, setJmlmain] = useState(0);
    const getdataBaru = async () => {
      try {
        const response = await axios.get(urlapi + "Listmain?id_user=" + iduser);
        setJmlmain(response.data.jml);
      } catch (error) {}
    };

    useEffect(() => {
      getdataBaru();
    }, []);

    return <>{jmmain}</>;
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="mt-3">
        {asist.map((ls, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-md-4 col-4">
                <h5>
                  <i className="far fa-circle-user text-danger fw-bold"></i>
                </h5>

                <small className="text-secondary fw-bold"> {ls.nama}</small>
              </div>

              <div className="col-md-4 col-4 text-center">
                <h5 className="text-danger fw-bold">
                  <Getmain iduser={ls.id_user} />{" "}
                  <i className="far fa-user"></i>
                </h5>
                <p className="text-secondary fw-bold">Play</p>
              </div>

              <div className="col-md-4 col-4 text-left">
                <h5 className="text-danger fw-bold">
                  {ls.total} <i className="far fa-user"></i>
                </h5>
                <p className="text-secondary fw-bold">Assist</p>
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
