import axios from "axios";
import React, { useEffect, useState } from "react";
import Compubahfoto from "./Compubahfoto";
import Compheader from "./Compheader";
import Compdataasist from "./Compdataasist";
import Compdatagoal from "./Compdatagoal";
import Compdataplay from "./Compdataplay";
import Loadprofil from "../../skeleton/Loadprofil";
import { ToastContainer, toast } from "react-toastify";
// import { act } from "react-dom/test-utils";

export default function Compmain() {
  const [profil, setPorfil] = useState([]);
  const [play, setPlay] = useState(false);
  const [asist, setAsist] = useState(false);
  const [goal, setGoal] = useState(false);
  const [win, setWin] = useState(false);
  const [datamain, setDatamain] = useState([]);
  const [jmlmain, setJmlmain] = useState();
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [load, setLoad] = useState(false);

  const [jk, setJk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tgllahir, setTgllahir] = useState("");
  const [nohp, setNohp] = useState();
  const [posisi, setPosisi] = useState("");

  const notifupdate = () => {
    toast.success("Profil anda berhasil di update !", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getProfil = async () => {
    try {
      const response = await axios.get(
        urlapi + "profil?id=" + localStorage.getItem("id")
      );
      setPorfil(response.data);
      setNohp(response.data.nohp);
      setTgllahir(response.data.tgl_lahir);
      setAlamat(response.data.alamat);
      setPosisi(response.data.posisi);
      setJk(response.data.jk);
    } catch (error) {
      // console.log(error.message);
    }
  };

  const updateProfil = async () => {
    await axios
      .post(urlapi + "Updateprofil2", {
        idauth: localStorage.getItem("id"),
        alamat: alamat,
        jk: jk,
        tgllahir: tgllahir,
        nohp: nohp,
        posisi: posisi,
      })
      .then((response) => {
        // console.log(response.data);
        notifupdate();
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getProfil();
      setLoad(true);
    }, 300);
  }, []);

  return (
    <>
      <Compheader img={profil.image} />
      <div>
        <div
          className="container"
          style={{ position: "relative", bottom: "50px" }}
        >
          {load == false ? (
            <Loadprofil />
          ) : (
            <div className="card shadow">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="text-primary fw-bold">Statistik anda</p>
                  <p className="text-primary fw-bold">
                    <i className="far fa-user"></i>
                  </p>
                </div>
                <hr />
                <Compdataplay />
                <hr />
                <Compdataasist />
                <hr />
                <Compdatagoal />

                {/* <div className="d-flex justify-content-between text-secondary">
                  <p>Rank</p>
                  <p className="text-warning">
                    <i className="far fa-futbol"></i>{" "}
                    <i className="far fa-futbol"></i>{" "}
                    <i className="far fa-futbol"></i>{" "}
                    <i className="far fa-futbol"></i>{" "}
                    <i className="far fa-futbol"></i>
                  </p>
                </div> */}
              </div>
            </div>
          )}
        </div>

        <div
          className={load ? "container mb-5" : "d-none"}
          style={{ position: "relative", bottom: "30px" }}
        >
          <div className="card shadow">
            <div className="card-body">
              <div className="d-flex justify-content-between text-primary">
                <p className="fw-bold">Profil anda</p>
                <p>
                  <i className="far fa-user"></i>
                </p>
              </div>
              <hr />
              <div className="form-group">
                <label className="fw-bold">Nama</label>
                <input
                  className="form-control mt-2 text-secondary"
                  value={profil.nama}
                />
              </div>

              <div className="form-group mt-3">
                <label className="fw-bold">Email</label>
                <input
                  className="form-control mt-2 text-secondary"
                  value={profil.email}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label className="fw-bold">Jenis kelamin</label>
                <select
                  className="form-control mt-2"
                  onChange={(e) => setJk(e.target.value)}
                >
                  <option disabled>-- Pilih jenis kelamin --</option>
                  <option value={jk}>{jk}</option>
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </div>

              <div className="form-group mt-3">
                <label className="fw-bold">Tanggal lahir</label>
                <input
                  type="date"
                  className="form-control mt-2 text-secondary"
                  onChange={(e) => setTgllahir(e.target.value)}
                  value={tgllahir}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label className="fw-bold">Alamat</label>
                <textarea
                  className="form-control mt-2"
                  onChange={(e) => setAlamat(e.target.value)}
                  value={alamat}
                ></textarea>
              </div>

              <div className="form-group mt-3">
                <label className="fw-bold">No Hp</label>
                <input
                  type="number"
                  className="form-control mt-2 text-secondary"
                  onChange={(e) => setNohp(e.target.value)}
                  value={nohp}
                ></input>
              </div>

              <div className="form-group mt-3">
                <label className="fw-bold">Posisi bermain</label>
                <select
                  className="form-control mt-2"
                  onChange={(e) => setPosisi(e.target.value)}
                >
                  <option disabled>-- Pilih posisi bermain --</option>
                  <option value={posisi}>{posisi}</option>
                  <option>Penyerang</option>
                  <option>Sayap</option>
                  <option>Pertahanan</option>
                  <option>Penjaga Gawang</option>
                </select>
              </div>

              <button
                className="btn w-100 mt-3 rounded-pill"
                onClick={() => updateProfil()}
                style={{ backgroundColor: "#2b2e5a", color: "white" }}
              >
                Updata profil anda
              </button>
            </div>
          </div>
        </div>

        {load ? <Compubahfoto /> : ""}
      </div>
      <ToastContainer />
    </>
  );
}
