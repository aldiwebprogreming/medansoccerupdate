import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Comppassword() {
  const [alert, setAlert] = useState("kosong");
  const [sukses, setSukses] = useState(false);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [password, setPassword] = useState("");
  const form = useRef();

  const cekEmail = async (e) => {
    if (e.length == 0) {
      setAlert("kosong");
    }
    try {
      const response = await axios.get(urlapi + "Cekemailpass?email=" + e);
      console.log(response.data.pass);
      setPassword(response.data.pass);
      setAlert("true");
    } catch (error) {
      setAlert("kosong");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j0g54zc",
        "template_rt0wcq8",
        form.current,
        "ts_WVztorR9I79cFz"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text == "OK") {
            setSukses(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container my-3" style={{ color: "white" }}>
      <div className="row" style={{ marginTop: "200px" }}>
        <h4 className="text-center">Lupa Password</h4>

        <div className={sukses ? "d-none" : ""}>
          <p className="text-center">
            Masukan email yang pernah anda daftarkan <br /> di aplikasi medan
            mini soccer dengan benar
          </p>
          <center>
            <form ref={form} onSubmit={sendEmail}>
              <input type="hidden" value={password} name="password"></input>
              <input
                onChange={(e) => cekEmail(e.target.value)}
                className="form-control text-center"
                name="to"
                placeholder="Masukan email anda"
                style={{ width: "70%" }}
              />
              <small className="mt-2">
                {alert == "true"
                  ? "Email anda benar"
                  : alert == "kosong"
                  ? ""
                  : "Email tidak terdaftar"}
              </small>
              <br />
              {alert == "true" ? (
                <button
                  type="submit"
                  className="btn  mt-2 fw-bold"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  Cek password anda
                </button>
              ) : (
                <button
                  disabled
                  className="btn btn-primary fw-bold mt-2"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "20px",
                  }}
                >
                  Cek password anda
                </button>
              )}
            </form>
          </center>
        </div>
        <div className={sukses == false ? "d-none" : ""}>
          <center>
            <img
              src="/sukses.png"
              className="img-fluid"
              alt=""
              style={{ height: "100px" }}
            ></img>
          </center>
          <p className="text-center">
            Password anda berhasil dikirim ke email anda, silahkan cek email{" "}
            <br />
            anda untuk mendapatkan password anda
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
  );
}
