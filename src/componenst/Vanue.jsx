import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loadlapangan from "../skeleton/Loadlapangan";
import Loadlabel from "../skeleton/Loadlabel";
import { ToastContainer, toast } from "react-toastify";

export default function Vanue() {
  const [lapangan, setLapangan] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [load, setLoad] = useState(false);
  const getLapangang = async () => {
    try {
      const response = await axios.get(urlapi + "lapangan");
      setLapangan(response.data);
      setLoad(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const notify = () =>
    toast.warning("Untuk saat ini lapangan belum tersedia !", {
      position: toast.POSITION.TOP_CENTER,
    });

  useEffect(() => {
    setTimeout(() => {
      getLapangang();
    }, 500);
  }, []);
  return (
    <div>
      {load ? (
        <p className="fw-bold">
          Booking lapangan buat kamu <i class="fa-regular fa-futbol"></i>{" "}
        </p>
      ) : (
        <Loadlabel />
      )}

      {load ? (
        <div className="row">
          {lapangan.map((lap) => {
            return (
              <div className="col-sm-12 mt-3" key={lap.id}>
                <div class={load ? "card shadow" : "d-none"}>
                  <Link
                    to={"/bookinglapangan/" + lap.slug + "/" + lap.id}
                    class=""
                    style={{
                      backgroundColor: "#2b2e5a",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <img class="card-img-top" src={lap.gambar} />
                  </Link>
                  <div class="card-body">
                    <p class="card-title text-center fw-bold">{lap.lapangan}</p>
                    <p class="card-text">{lap.pasilitas}</p>

                    {}
                    {lap.id == 2 || lap.id == 4 ? (
                      <>
                        <Link
                          onClick={notify}
                          class="btn btn-sm w-100"
                          style={{
                            backgroundColor: "#2b2e5a",
                            color: "white",
                          }}
                        >
                          Booking
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to={"/bookinglapangan/" + lap.slug + "/" + lap.id}
                          class="btn btn-sm w-100"
                          style={{
                            backgroundColor: "#2b2e5a",
                            color: "white",
                          }}
                        >
                          Booking
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="row">
          <Loadlapangan />
          <Loadlapangan />
          <Loadlapangan />
        </div>
      )}
    </div>
  );
}
