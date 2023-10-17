import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Complawanmainhariini() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [lawan, setLawan] = useState([]);

  const getLawan = async () => {
    try {
      const response = await axios.get(
        urlapi + "Lawanmainhariini?id_user=" + localStorage.getItem("id")
      );
      setLawan(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLawan();
  }, []);

  return (
    <div>
      <hr />
      <p>Team lawan anda hari ini</p>
      <hr />
      {lawan.map((list) => {
        return (
          <div className="mb-2" key={list.id}>
            <div className="d-flex justify-content-between">
              <img
                src="pemain.png"
                class="img-fluid"
                alt="Responsive image"
                style={{ height: "50px" }}
              ></img>

              <p className="" style={{ marginLeft: "10px" }}>
                Hay {localStorage.getItem("nama")}, saya adalah lawan anda,
                apakah kamu ingin lihat statistik saya ?
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <p>
                <i className="far fa-user"></i> {list.nama}
              </p>

              <p>
                <i className="fas fa-chart-simple"></i> Statistik
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
