import React from "react";

import { useNavigate } from "react-router-dom";

export default function Compheader({ img }) {
  // console.log(img);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("nama");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    window.location.replace("/");
  };
  return (
    <div>
      <div
        className="card text-white"
        style={{
          borderRadius: "0px",
          backgroundImage:
            "url('https://p4.wallpaperbetter.com/wallpaper/398/874/541/champions-league-stadium-wallpaper-preview.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "containt",
          backgroundPosition: "center",
        }}
      >
        <div className="container my-5">
          <center>
            {img == "" ? (
              <img
                src="pemain.png"
                className="img-fluid mt-4"
                alt=""
                style={{
                  height: "150px",
                  borderRadius: "100%",
                  borderStyle: "solid",
                }}
              ></img>
            ) : (
              <img
                src={img}
                className="img-fluid mt-4"
                alt=""
                style={{
                  height: "150px",
                  borderRadius: "100%",
                  borderStyle: "solid",
                }}
              ></img>
            )}
          </center>
          <h4 className="card-title fw-bold text-center mt-3">
            Hay, {localStorage.getItem("nama")}
          </h4>
          <p className="text-center">
            Apakah anda sudah melengkapi data profil<br></br>
            <span
              class="badge text-bg-primary"
              onClick={logout}
              style={{ cursor: "pointer" }}
            >
              Logout
            </span>
          </p>
          <center></center>
        </div>
      </div>
    </div>
  );
}
