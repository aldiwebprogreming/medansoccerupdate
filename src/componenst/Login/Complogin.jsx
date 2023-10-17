import React from "react";

import { useState } from "react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Complogin() {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alertakun, setAlertakun] = useState(false);

  const navigate = useNavigate();

  const loginGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setNama(result.user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        urlapi + "Login?email=" + email + "&pass=" + pass
      );
      console.log(response.data);
      localStorage.setItem("nama", response.data.nama);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("id", response.data.id_auth);

      navigate("/home");
    } catch (error) {
      setAlertakun(true);
    }
  };

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-sm-1"></div>
        <div className="col-sm-10">
          {nama == "" ? (
            <div className="mt-5">
              <div
                className="card-body"
                style={{ marginTop: "100px", height: "100%" }}
              >
                <h4 className="text-center fw-bold text-white">
                  Login <br></br>
                  <p className="mt-2">Medan Mini Soccer</p>
                </h4>
                <p className="text-center text-white mt-3">
                  Masukan email dan password anda dengan benar
                </p>

                <div
                  className={`alert alert-danger ${alertakun ? "" : "d-none"}`}
                  role="alert"
                >
                  <p className="text-center">
                    <strong>Upps, </strong> Akun yang anda masukan salah, cek
                    email dan password anda
                  </p>
                </div>

                <div className="form-group">
                  <label class="form-label fw-bold text-white">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mt-4">
                  <label class="form-label fw-bold text-white">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="*******"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  ></input>
                </div>
                {email == "" || pass == "" ? (
                  <>
                    {" "}
                    <button
                      disabled
                      className="btn w-100 mt-4"
                      style={{ backgroundColor: "white" }}
                    >
                      <i className="far fa-user"></i> Login sekarang
                    </button>
                  </>
                ) : (
                  <>
                    {" "}
                    <button
                      onClick={handleLogin}
                      className="btn w-100 fw-bold mt-4"
                      style={{ backgroundColor: "white", color: "#2b2e5a" }}
                    >
                      <i className="far fa-user"></i> Login sekarang
                    </button>
                  </>
                )}

                <hr />
                <p className="text-white mt-4 text-center">
                  Belum punya akun ?{" "}
                  <Link className="text-white" to="/register">
                    Daftar sekarang
                  </Link>
                </p>
                <p className="text-center">
                  <Link className="text-white" to="/lupapassword">
                    Lupa password ?
                  </Link>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <img
                src="loginsuccess.png"
                class="img-fluid"
                alt="loginsukses"
                style={{}}
              />
              <h5 className="text-center text-success fw-bold">Hello {nama}</h5>
              <p className="text-center text-success">
                Anda berhasil login dengan akun google
              </p>
              <center>
                <Link to="/home" className="btn btn-danger">
                  <i className="fa fa-home"></i> Go Home
                </Link>
              </center>
            </div>
          )}
        </div>

        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}
