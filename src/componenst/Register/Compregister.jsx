import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Compregister() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [pass, setPass] = useState("");
  const [ulangipass, setUlangipass] = useState("");
  const [alertpass, setAlertpass] = useState(false);
  const [alertemail, setAlertemail] = useState(false);
  const [sukses, setSukses] = useState(false);
  const form = useRef();
  const navigate = useNavigate();
  // const [kodeveri, setKodeveri] = useState("");

  const kode = Math.floor(Math.random() * 10000);

  const handlePass = (e) => {
    setUlangipass(e);
    if (e == pass) {
      setAlertpass(false);
    } else {
      setAlertpass(true);
    }
  };

  const cekemail = async (email) => {
    setEmail(email);
    try {
      const response = await axios.get(urlapi + "User?email=" + email);
      // console.log(response.data);
      if (response.data.status == "tersedia") {
        setAlertemail(true);
      }
    } catch (error) {
      // console.log(error.message);
      setAlertemail(false);
    }
  };

  const addData = async (e) => {
    e.preventDefault();
    await axios
      .post(urlapi + "User", {
        nama: nama,
        email: email,
        nohp: nohp,
        pass: pass,
        kodeveri: kode,
      })
      .then((response) => {
        setNama("");
        setEmail("");
        setPass("");
        setNohp("");
        setUlangipass("");

        // menjalakan aksi send email
        setSukses(true);
        sendEmail();
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_oq4sklv",
        "template_s9u31ap",
        form.current,
        "s2k_8LATBOCtD0pAL"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            navigate("/login");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div className="container">
        <div className={sukses ? "d-none mt-5" : "mt-5"}>
          <form ref={form} onSubmit={addData}>
            <div
              className="card-body"
              style={{ marginTop: "100px", height: "100%" }}
            >
              <h4 className="text-center fw-bold text-white">
                Register
                <p className="mt-2">Medan Mini Soccer </p>
              </h4>
              <p className="text-center text-white mt-3">
                Masukan data anda dengan benar
              </p>

              <input type="hidden" name="kode" value={kode}></input>
              <div className="form-group">
                <label class="form-label fw-bold text-white">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  name="nama"
                  id="exampleFormControlInput1"
                  placeholder="Budi"
                  onChange={(e) => setNama(e.target.value)}
                  value={nama}
                ></input>
              </div>
              <div className="form-group mt-4">
                <label class="form-label fw-bold text-white">Email</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  onChange={(e) => cekemail(e.target.value)}
                  value={email}
                ></input>
                <small className={`fw-bold mt-2 ${alertemail ? "" : "d-none"}`}>
                  Email sudah terdaftar
                </small>
              </div>

              <div className="form-group mt-4">
                <label class="form-label fw-bold text-white">No Hp</label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="628XXXXXXX"
                  onChange={(e) => setNohp(e.target.value)}
                  value={nohp}
                ></input>
              </div>

              <div className="form-group mt-4">
                <label class="form-label fw-bold text-white">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="*******"
                  onChange={(e) => setPass(e.target.value)}
                  value={pass}
                ></input>
              </div>

              <div className="form-group mt-4">
                <label class="form-label fw-bold text-white">
                  Ulangi Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="*******"
                  onChange={(e) => handlePass(e.target.value)}
                  value={ulangipass}
                ></input>
              </div>
              <p className={`text-danger ${alertpass ? "" : "d-none"}`}>
                Password belum sama
              </p>

              {nama == "" ||
              email == "" ||
              nohp == "" ||
              pass == "" ||
              ulangipass == "" ||
              alertemail == true ||
              alertpass == true ? (
                <>
                  {" "}
                  <button
                    className="btn w-100 mt-4"
                    disabled
                    style={{ backgroundColor: "white" }}
                  >
                    <i className="far fa-user"></i> Daftar sekarang
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="submit"
                    className="btn fw-bold w-100 mt-4"
                    style={{ backgroundColor: "white", color: "#2b2e5a" }}
                  >
                    <i className="far fa-user"></i> Daftar sekarang
                  </button>
                </>
              )}

              <hr />
              <p className="text-primary mt-4 text-center">
                Sudah punya akun ? <Link to="/login">Login sekarang</Link>
              </p>
            </div>
          </form>
        </div>
        <div className={sukses == false ? "d-none mt-5" : "mt-5"}>
          <div
            className="card-body"
            style={{ marginTop: "100px", height: "100%" }}
          >
            <h4 className="text-center fw-bold text-white">
              Register
              <p className="mt-2">Medan Mini Soccer </p>
            </h4>
            <center>
              <img
                src="/sukses.png"
                className="img-fluid"
                alt=""
                style={{ height: "100px" }}
              ></img>
            </center>
            <p className="text-center" style={{ color: "white" }}>
              Akun Medan Mini Soccer anda berhasil dibuat <br />
              Silahkan login dengan email dan password yang sudah anda daftarkan
            </p>
            <Link
              to={"/login"}
              className="btn w-100 fw-bold"
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "20px",
              }}
            >
              Login sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
