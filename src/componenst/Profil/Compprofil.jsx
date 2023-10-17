import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Compprofil() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [alamat, SetAlamat] = useState("");
  const [jk, Setjk] = useState("");
  const [tgllahir, SetTgllahir] = useState("");
  const [nik, SetNik] = useState("");
  const [posisi, SetPosisi] = useState("");
  const [ucapan, SetUcapan] = useState(false);

  const addProfil = async () => {
    await axios
      .post(urlapi + "profil", {
        id_auth: localStorage.getItem("id"),
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
        alamat: alamat,
        jk: jk,
        tgl_lahir: tgllahir,
        nik: nik,
        posisi: posisi,
      })
      .then((response) => {
        // console.log(response);
        SetUcapan(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const cekProfil = async () => {
    try {
      const response = await axios.get(
        urlapi + "profil?id=" + localStorage.getItem("id")
      );
      if (response) {
        SetUcapan(true);
      }
    } catch (error) {
      // console.log(error.message);
    }
  };

  useEffect(() => {
    cekProfil();
  }, []);
  return (
    <div>
      {ucapan ? (
        <div className="card" style={{ borderRadius: "0px" }}>
          <div className="card-body">
            <center>
              <img
                src="happy.svg"
                className="img-fluid"
                alt="Responsive image"
                s
                style={{ height: "300px" }}
              />
            </center>
            <h3 className="text-center text-success mt-5">
              Yess.. <br /> {localStorage.getItem("nama")}
              <br /> Profil anda berhasil di buat
            </h3>
            <p className="text-center">
              Sekarang anda dapat melakukan booking lapangan dan mejadi member
              karir di Medan Mini Soccer
            </p>

            <Link to="/home" className="btn btn-danger w-100">
              Go Home <i className="fas fa-arrow-right"></i>{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="card" style={{ borderRadius: "0px" }}>
            <div className="card-body">
              <div className="alert alert-primary text-center" role="alert">
                <label className="fw-bold">
                  {" "}
                  Hello {localStorage.getItem("nama")}
                </label>{" "}
                <br />
                Anda berhasil login dengan akun google anda, lengkapi profil
                anda dengna lengkap untuk memulai semuanya
              </div>
            </div>
          </div>
          <div className="card mt-2" style={{ borderRadius: "0px" }}>
            <div className="card-body">
              <div className="container">
                <div class="d-flex justify-content-between">
                  <p className="text-danger">Profil anda</p>
                  <p className="text-danger">
                    <i className="fas fa-user"></i>
                  </p>
                </div>

                <div className="form-group">
                  <label>Nama</label>
                  <input
                    className="form-control mt-2"
                    value={localStorage.getItem("nama")}
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Email</label>
                  <input
                    className="form-control mt-2"
                    value={localStorage.getItem("email")}
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Alamat</label>
                  <input
                    className="form-control mt-2"
                    onChange={(e) => SetAlamat(e.target.value)}
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Jenis Kelamin</label>
                  <select
                    className="form-control mt-2"
                    onChange={(e) => Setjk(e.target.value)}
                  >
                    <option></option>
                    <option>Laki - Laki</option>
                    <option>Prempuan</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label>Tanggal Lahir</label>
                  <input
                    type="date"
                    className="form-control mt-2"
                    onChange={(e) => SetTgllahir(e.target.value)}
                  />
                </div>

                {localStorage.getItem(nik) == "" ? (
                  <>
                    <div className="form-group mt-3">
                      <label>NIK</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        onChange={(e) => SetNik(e.target.value)}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="form-group mt-3">
                      <label>NIK</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        onChange={(e) => SetNik(e.target.value)}
                        value={localStorage.getItem("nik")}
                      />
                    </div>
                  </>
                )}

                <div className="form-group mt-3">
                  <label>Posisi Bermain</label>
                  <select
                    className="form-control mt-2"
                    onChange={(e) => SetPosisi(e.target.value)}
                  >
                    <option></option>
                    <option>Penyerang</option>
                    <option>Sayap</option>
                    <option>Pertahanan</option>
                    <option>Penjaga Gawang</option>
                    <option>Semau Bisa</option>
                  </select>
                </div>

                <button
                  onClick={addProfil}
                  className="btn btn-danger w-100 mt-4"
                >
                  Submit Profil
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
}
