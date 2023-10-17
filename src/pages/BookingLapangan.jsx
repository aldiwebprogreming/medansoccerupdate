import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../componenst/Navbar";
import Headerbokinglapangan from "../componenst/compbooking/Headerbokinglapangan";
import axios from "axios";
import CompSlide from "../componenst/compbooking/CompSlide";
import Listjadwalbooking from "../componenst/compbooking/Listjadwalbooking";
import Loadgambar from "../skeleton/Loadgambar";
import Loadketerangan from "../skeleton/Loadketerangan";

export default function BookingLapangan() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [lapangan, setLapangan] = useState([]);
  const { slug, id } = useParams();
  const [load, setLoad] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(urlapi + "lapangan?slug=" + slug);
      setLapangan(response.data);
      setLoad(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 500);
  }, []);

  return (
    <div>
      <Navbar judul="Booking" aicon="true" />
      <Headerbokinglapangan
        judul={lapangan.lapangan}
        title={lapangan.pasilitas}
      />
      {load ? <CompSlide gambar={lapangan.gambar} /> : <Loadgambar />}

      {load ? (
        <>
          <div className="container">
            <div
              className="card shadow"
              style={{ position: "relative", bottom: "50px", border: "none" }}
            >
              <div className="card-body">
                <p className="fw-bold">Keterangan</p>
                <p className="text-secondary"> {lapangan.pasilitas}</p>
              </div>
            </div>
            <div
              className="card mb-3 shadow"
              style={{ border: "none", position: "relative", bottom: "20px" }}
            >
              <div className="card-body">
                <p className="fw-bold">Fasilitas</p>
                <div className="d-flex justify-content-between text-secondary mt-3">
                  <div>
                    <p>
                      <i className="fa-solid fa-utensils"></i> Cafe & Resto
                    </p>
                  </div>

                  <div>
                    <p>
                      <i className="fa-solid fa-mosque"></i> Musholla
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between text-secondary mt-3">
                  <div>
                    <p>
                      <i className="fa-solid fa-car"></i> Parkir Mobil
                    </p>
                  </div>

                  <div>
                    <p>
                      <i className="fa-solid fa-motorcycle"></i> Parkir Motor
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between text-secondary mt-3">
                  <div>
                    <p>
                      <i className="fa-solid fa-door-open"></i> Ruang Ganti
                    </p>
                  </div>

                  <div>
                    <p>
                      <i class="fa-solid fa-shower"></i> Water Heater
                    </p>
                  </div>
                </div>

                <div className="d-flex justify-content-between text-secondary mt-3">
                  <div>
                    <p>
                      <i class="fa-solid fa-toilet-paper"></i> Toilet
                    </p>
                  </div>
                  <div>
                    <p>
                      <i className="fa-solid fa-futbol"></i> Rumput
                      Bersertifikat FIFA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="card mb-3 shadow"
              style={{ border: "none", position: "relative", bottom: "20px" }}
            >
              <div className="card-body">
                <p className="fw-bold">Jam Oprasional</p>
                <div className="d-flex justify-content-between mt-3">
                  <p className="text-secondary">
                    <i className="fas fa-calendar-days"></i> Senin - Minggu
                  </p>
                  <p className="text-secondary">
                    {" "}
                    <i className="far fa-clock"></i> 06.00 - 24.00 WIB
                  </p>
                </div>
              </div>
            </div>

            <div
              className="card mb-3 shadow"
              style={{ border: "none", position: "relative", bottom: "20px" }}
            >
              <div className="card-body">
                <p className="fw-bold">Lokasi Lapangan</p>
                <p className="text-secondary">
                  Jl. Ngumban Surbakti 36, Sempakata, Kec. Medan Selayang, Kota
                  Medan, Sumatera Utara 20131
                </p>
                <div class="embed-responsive embed-responsive-4by3 row">
                  <iframe
                    className="embed-responsive-item col-lg-12 col-md-12 col-sm-12"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31857.608273296017!2d98.62073169412184!3d3.541035869879191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f6a9c128c65%3A0x8c59390c4980a172!2sMedan%20Mini%20Soccer!5e0!3m2!1sid!2sid!4v1696565303319!5m2!1sid!2sid"
                    style={{ border: "0px" }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <Listjadwalbooking idlapangan={id} />
        </>
      ) : (
        <Loadketerangan />
      )}
    </div>
  );
}
