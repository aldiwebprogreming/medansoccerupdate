import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Compverifikasi() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [alertkode, setAlertkode] = useState();

  const cekCode = async (val) => {
    const length = val.length;
    if (length == 4) {
      try {
        const response = await axios.get(urlapi + "Cekkode?kode=" + val);
        if (response.data.status == "benar") {
          updateStatus(val);
        }
      } catch (error) {
        setAlertkode(false);
      }
    } else if (val == "") {
      setAlertkode();
    }
  };

  const updateStatus = async (val) => {
    await axios
      .post(urlapi + "Cekkode", {
        kode: val,
      })

      .then((response) => {
        // console.log(response.data);
        setAlertkode(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <center>
        <div className="container">
          {alertkode ? (
            <>
              {" "}
              <h4 className="text-center fw-bold text-white mt-5">
                Verifikasi Sukses
              </h4>
              <img
                src="img/tick.png"
                class="img-fluid"
                alt="Responsive image"
                style={{ height: "300px" }}
              ></img>
              <p className="mt-2 text-white">
                Verifikasi anda berhasil, silahkan login sekarang
              </p>
              <Link
                to="/login"
                className="btn fw-bold"
                style={{ backgroundColor: "white" }}
              >
                Login sekarang
              </Link>
            </>
          ) : (
            <>
              {" "}
              <h4 className="text-center fw-bold text-white mt-5">
                Verifikasi Kode
              </h4>
              <img
                src="/otp.png"
                class="img-fluid"
                alt="Responsive image"
                style={{ height: "300px" }}
              ></img>
              <p className="text-white">
                Masukan kode verifikasi anda dengan benar
                <br />
                Cek akun email yang telah anda daftarkan untuk mendapatkan kode
                verifikasi
              </p>
              <p></p>
              <center>
                <input
                  type="text"
                  className="form-control text-center fw-bold"
                  placeholder="- - - -"
                  style={{ width: "200px" }}
                  onChange={(e) => cekCode(e.target.value)}
                ></input>
                <p
                  className={`fw-bold text-danger ${
                    alertkode == false ? "" : "d-none"
                  }`}
                >
                  Kode verifikasi salah
                </p>
              </center>
              <p className="mt-3 text-secondary text-white">
                Belum menerima kode verifiaksi ? <br />
                silahkan kirim ulang
              </p>
            </>
          )}
        </div>
      </center>
    </div>
  );
}
