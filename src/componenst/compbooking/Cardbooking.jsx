import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loadlapanganbooking from "../../skeleton/Loadlapanganbooking";
import { ToastContainer, toast } from "react-toastify";

export default function Cardbooking() {
  const [lapangan, setLapangan] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [load, setLoad] = useState(false);

  const getdata = async () => {
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
      getdata();
    }, 500);
  }, []);

  return (
    <div>
      <div className="row g-0">
        <div className="col-lg-12">
          {load ? (
            <>
              {lapangan.map((lap) => {
                return (
                  <div key={lap.id}>
                    {lap.id == 2 || lap.id == 4 ? (
                      <>
                        {" "}
                        <Link
                          onClick={notify}
                          style={{ textDecoration: "none" }}
                        >
                          <div
                            className="card cardBooking shadow mt-3"
                            key={lap.id}
                          >
                            <div className="row g-0">
                              <div className="col-6 col-md-5">
                                <img
                                  src={lap.gambar}
                                  className="img-fluid"
                                  alt="Responsive image"
                                />
                              </div>
                              <div className="col-6 col-md-7">
                                <div className="card-body d-flex flex-column">
                                  <div className="h-100">
                                    <label className="fw-bold text-secondary">
                                      {lap.lapangan}
                                    </label>

                                    {/* <small className="fw-bold text-success">
                                {"Rp."} {lap.harga_perjam} / Jam
                              </small> */}
                                    <br></br>
                                    <p className="text-secondary">
                                      {" "}
                                      {lap.pasilitas}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to={"/bookinglapangan/" + lap.slug + "/" + lap.id}
                          style={{ textDecoration: "none" }}
                          key={lap.id}
                        >
                          <div
                            className="card cardBooking shadow mt-3"
                            key={lap.id}
                          >
                            <div className="row g-0">
                              <div className="col-6 col-md-5">
                                <img
                                  src={lap.gambar}
                                  className="img-fluid"
                                  alt="Responsive image"
                                />
                              </div>
                              <div className="col-6 col-md-7">
                                <div className="card-body d-flex flex-column">
                                  <div className="h-100">
                                    <label className="fw-bold text-secondary">
                                      {lap.lapangan}
                                    </label>

                                    {/* <small className="fw-bold text-success">
                                {"Rp."} {lap.harga_perjam} / Jam
                              </small> */}
                                    <br></br>
                                    <p className="text-secondary">
                                      {" "}
                                      {lap.pasilitas}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <Loadlapanganbooking />
              <Loadlapanganbooking />
              <Loadlapanganbooking />
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
