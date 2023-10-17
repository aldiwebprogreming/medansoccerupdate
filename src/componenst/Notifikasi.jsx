import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Notifikasi() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [booking, setBooking] = useState([]);
  const [viewnotif, setViewnotif] = useState(true);
  const [viewdata, setViewdata] = useState(false);

  const cekbooking = async () => {
    try {
      const response = await axios.get(
        urlapi + "Getbooking?id=" + localStorage.getItem("id")
      );
      setBooking(response.data);
      console.log(response.data);
    } catch (error) {}
  };
  const cekbooking2 = async () => {
    try {
      const response = await axios.get(
        urlapi + "Getbooking?id=" + localStorage.getItem("id") + "&&all=true"
      );
      setBooking(response.data);
      console.log(response.data);
    } catch (error) {}
  };

  const handle = (e) => {
    if (e == "notifikasi") {
      cekbooking();
      setViewnotif(true);
      setViewdata(false);
    } else if (e == "data" && viewdata == true) {
      cekbooking();
      setViewnotif(true);
      setViewdata(false);
    } else if (e == "data") {
      cekbooking2();
      setViewnotif(false);
      setViewdata(true);
    }
  };

  useEffect(() => {
    cekbooking();
  }, []);
  return (
    <div className={booking == "" ? "d-none" : ""}>
      <div class="d-flex justify-content-between">
        <p
          className={viewnotif ? "fw-bold text-primary" : "fw-bold"}
          onClick={() => handle("notifikasi")}
          style={{ cursor: "pointer" }}
        >
          Notifikasi <i className="fas fa-bell"></i>
        </p>
        <p
          className={viewdata ? "fw-bold text-primary" : "fw-bold"}
          onClick={() => handle("data")}
          style={{ cursor: "pointer" }}
        >
          Lihat lebih banyak{" "}
          <i
            className={viewdata ? "fas fa-angle-down" : "fas fa-angle-right"}
          ></i>
        </p>
      </div>
      {booking.map((data) => {
        return (
          <div key={data.id}>
            {data.status_pembayaran == "200" ? (
              <div class="alert alert-primary" role="alert">
                <small>
                  Booking {data.lapangan} pada tanggal{" "}
                  <strong>{data.tgl}</strong> jam{" "}
                  <strong>{data.jam_booking} WIB</strong> Disetuji
                </small>
              </div>
            ) : data.status_pembayaran == "400" ? (
              <div class="alert alert-danger" role="alert">
                <small>
                  Booking {data.lapangan} pada tanggal{" "}
                  <strong>{data.tgl}</strong> jam{" "}
                  <strong>{data.jam_booking} WIB</strong> Ditolak
                </small>
              </div>
            ) : (
              <div class="alert alert-warning" role="alert">
                <small>
                  Booking {data.lapangan} pada tanggal{" "}
                  <strong>{data.tgl}</strong> jam{" "}
                  <strong>{data.jam_booking} WIB</strong> Menunggu Persetujuan
                </small>
              </div>
            )}
          </div>
        );
      })}
      <hr />
    </div>
  );
}
