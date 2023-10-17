import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Setujui() {
  const { iduser } = useParams();
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [dataBooking, setDatabooking] = useState([]);
  const [alert, setAlert] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get(urlapi + "Pembayaran?kode=" + iduser);
      setDatabooking(response.data);
      console.log(response.data);
      if (response.data.status == 200) {
        setAlert(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const Update = async () => {
    await axios
      .post(urlapi + "Updatestatus", {
        kode: iduser,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status == true) {
          setAlert(true);
          sendwa();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const sendwa = async () => {
    try {
      const response = await axios.get(urlapi + "Notifapprove?kode=" + iduser);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container">
        <h5 className="mb-4 mt-4 text-center text-primary">
          Halaman Persetujuan Pembayaran
        </h5>
        <p className="text-center text-secondary">
          Setujui pembayaran jika pembayaran yang di lakukan sudah benar
        </p>
        <p className="text-center">
          Bank Pengirim : {dataBooking.norek} <br></br>Atas Nama :{" "}
          {dataBooking.atasnama} <br /> No Whatsapp : {dataBooking.wa} <br />{" "}
          Total Pembayaran : {dataBooking.harga}
        </p>

        <center>
          {alert ? (
            <>
              <img
                src="/sukses.png"
                className="img-fluid"
                alt="Responsive image"
                style={{ height: "200px" }}
              ></img>

              <p className="text-primary mb-5">Pembayaran sudah di setujui</p>
            </>
          ) : (
            <>
              <img
                src={dataBooking.bukti}
                className="img-fluid"
                alt="Responsive image"
              ></img>

              <button
                onClick={() => Update()}
                className="btn btn-primary w-100 my-3"
                style={{ borderRadius: "20px" }}
              >
                Setujui pembayaran
              </button>
            </>
          )}
        </center>
      </div>
    </div>
  );
}
