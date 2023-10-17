import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [profil, setProfil] = useState([]);

  const getProfil = async () => {
    try {
      const response = await axios.get(
        urlapi + "Profil?id=" + localStorage.getItem("id")
      );
      setProfil(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProfil();
  }, []);

  return (
    <div>
      <div className="headerred shadow">
        <br />
        <br />

        <div className="container text-white mt-3">
          {profil.image == "" ? (
            <Link to={"/profilanda"} style={{ textDecoration: "none" }}>
              <img
                src="pemain.png"
                class="img-fluid"
                alt=""
                style={{
                  height: "50px",
                  borderStyle: "solid",
                  borderRadius: "100%",
                }}
              ></img>
            </Link>
          ) : (
            <Link to={"/profilanda"} style={{ textDecoration: "none" }}>
              <img
                src={profil.image}
                class="img-fluid"
                alt=""
                style={{
                  height: "50px",
                  borderStyle: "solid",
                  borderRadius: "100%",
                }}
              ></img>
            </Link>
          )}

          <p className="mt-2">
            Hello, {localStorage.getItem("nama")} <br />
            {profil.alamat}
          </p>
        </div>
      </div>
    </div>
  );
}
