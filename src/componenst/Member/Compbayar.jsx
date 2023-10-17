import axios from "axios";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { imageDb } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Compbayar({ qty, total }) {
  const urlapi = process.env.REACT_APP_BASE_URL;

  const [norek, setNorek] = useState(0);
  const [atasnama, setAtasnam] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [valueimg, setvalueimg] = useState("");
  const [nameImg, setNameImg] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(true);
  const [alert, setAlert] = useState(false);

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
    // console.log(e);
    setvalueimg(e.target.value);
    setNameImg(e.target.files[0].name);
  };

  const handlepemabayaran = () => {
    setForm(false);
    setLoading(true);
    const imgRef = ref(imageDb, `files/${nameImg}`);
    uploadBytes(imgRef, img);
    console.log(imgRef._location.path_);

    setTimeout(() => {
      getDownloadURL(ref(imageDb, `files/${nameImg}`)).then((url) => {
        setLoading(false);
        addmemberkarir(url);
      });
    }, 3000);
  };

  const addmemberkarir = async (url) => {
    await axios
      .post(urlapi + "AddMemberKarir", {
        nama: localStorage.getItem("nama"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        waktu_member: qty,
        total_harga: qty * total,
        status_pembayaran: 201,
        norek: norek,
        atasnama: atasnama,
        keterangan: keterangan,
        bukti: url,
      })
      .then((response) => {
        // console.log(response);
        setAlert(true);
        // setAwal(true);
        // getMember();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container">
      <div
        className={`text-center ${loading ? "" : "d-none"}`}
        style={{ marginTop: "150px" }}
      >
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        <br></br>
        <label>Loading....</label>
      </div>

      <div className={alert ? "" : "d-none"}>
        <center>
          <img
            src="/sukses.png"
            className="img-fluid"
            alt=""
            style={{ height: "100px" }}
          ></img>
          <h5 className="mt-4 text-secondary">
            <strong>Hei, {localStorage.getItem("nama")} </strong>
            <br></br>
            Pembayaran anda berhasil dikirm silahkan menunggu persetujuan
            pembayaran anda
          </h5>
          <a href={"/member"} className="btn btn-danger mt-5">
            Tutup popup
          </a>
        </center>
      </div>

      <div className={form ? "" : "d-none"}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => setNorek(e.target.value)}
            placeholder="Nomor rekening anda"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            onChange={(e) => setAtasnam(e.target.value)}
            placeholder="Atas nama"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="file" onChange={(e) => handleChangeImg(e)} />
          <Form.Text className="text-muted">
            Masukan bukti pembayaran anda dengna benar dan jelas
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <textarea
            className="form-control"
            placeholder="Keterangan"
            onChange={(e) => setKeterangan(e.target.value)}
          ></textarea>
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <button
          className="btn btn-danger w-100"
          onClick={() => handlepemabayaran()}
        >
          Bayar sekarang
        </button>
      </div>
    </div>
  );
}
