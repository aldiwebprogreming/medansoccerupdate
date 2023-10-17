import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { imageDb } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import emailjs from "@emailjs/browser";

export default function Pembayaran({
  tgl,
  harga,
  namateam,
  idlapangan,
  lapangan,
  jambooking,
  wa,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [norek, setNorek] = useState("");
  const [atasnama, setAtasnam] = useState("");
  const [nameImg, setNameImg] = useState("");
  const [valueimg, setvalueimg] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(true);
  const [alertwa, setAlertwa] = useState(false);

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
    // console.log(e);
    setvalueimg(e.target.value);
    setNameImg(e.target.files[0].name);
  };

  const handleBooking = () => {
    setLoading(true);
    const imgRef = ref(imageDb, `files/${nameImg}`);
    uploadBytes(imgRef, img);
    console.log(imgRef._location.path_);

    setTimeout(() => {
      getDownloadURL(ref(imageDb, `files/${nameImg}`)).then((url) => {
        console.log("prosess");

        setForm(false);
        addbooking(url);
      });
    }, 15000);
  };

  const addbooking = async (url) => {
    await axios
      .post(urlapi + "Addbooking", {
        nama: localStorage.getItem("nama"),
        iduser: localStorage.getItem("id"),
        id_lapangan: idlapangan,
        lapangan: lapangan,
        tgl: tgl,
        harga: harga,
        team: namateam,
        jam: jambooking,
        bukti: url,
        norek: norek,
        atasnama: atasnama,
        wa: wa,
      })

      .then((response) => {
        console.log(response.data);
        sendwa(response.data.kode_booking);
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const sendwa = async (kodebooking) => {
    try {
      const response = await axios.get(
        urlapi +
          "Sendwa?jam=" +
          jambooking +
          "&tgl=" +
          tgl +
          "&kodebooking=" +
          kodebooking
      );
      console.log(response.data);
      setLoading(false);
      if (response.data.status == false) {
        setAlertwa(false);
      } else {
        setAlertwa(false);
      }
    } catch (error) {
      console.log(console.error("message"));
    }
  };

  const handlebtnpopup = () => {
    setForm(true);
    setShow(false);
  };

  return (
    <>
      <Button
        variant="btn w-100 rounded-pill"
        onClick={handleShow}
        style={{ backgroundColor: "#2b2e5a", color: "white" }}
      >
        Booking sekarang
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        style={{ height: "500px" }}
      >
        <Offcanvas.Header closeButton>
          <Container>
            <Offcanvas.Title>Pembayaran</Offcanvas.Title>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            {loading ? (
              <div className="text-center" style={{ marginTop: "150px" }}>
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
                <p className="text-center">
                  Mohon untuk menunggu proses pembayaran
                </p>
              </div>
            ) : (
              <div>
                {form ? (
                  <>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      {/* <Form.Control
                        type="text"
                        onChange={(e) => setNorek(e.target.value)}
                        placeholder="n"
                      /> */}
                      <select
                        className="form-control"
                        required
                        onChange={(e) => setNorek(e.target.value)}
                      >
                        <option value="">-- Pilih Nama Bank Anda --</option>
                        <option>BRI</option>
                        <option>BNI</option>
                        <option>BCA</option>
                        <option>Mandiri</option>
                        <option>Bank Sumut</option>
                        <option>Danamon</option>
                        <option>CIMB Niaga</option>
                        <option>Lainya</option>
                      </select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        onChange={(e) => setAtasnam(e.target.value)}
                        placeholder="Atas nama"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="file"
                        onChange={(e) => handleChangeImg(e)}
                      />
                      <Form.Text className="text-muted">
                        Masukan bukti pembayaran anda dengan benar dan jelas
                        dengan format Gambar (JPG, JPEG dan PNG)
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <textarea
                        className="form-control"
                        placeholder="Keterangan"
                      ></textarea>
                      <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <button
                      className="btn w-100 rounded-pill"
                      onClick={() => handleBooking()}
                      style={{ backgroundColor: "#2b2e5a", color: "white" }}
                    >
                      Bayar sekarang
                    </button>
                  </>
                ) : (
                  <>
                    <center>
                      {alertwa ? (
                        <div>
                          <img
                            src="/close.png"
                            className="img-fluid"
                            alt=""
                            style={{ height: "100px" }}
                          ></img>
                          <h5 className="mt-4 text-secondary">
                            <strong>
                              Hei, {localStorage.getItem("nama")}{" "}
                            </strong>
                            <br></br>
                            Pembayaran anda gagal, mohon untuk mencoba lagi
                            <center>
                              <a
                                href={"/formbooking/" + idlapangan}
                                className="btn mt-5"
                                style={{
                                  backgroundColor: "#2b2e5a",
                                  color: "white",
                                }}
                              >
                                Coba lagi
                              </a>
                            </center>
                          </h5>
                        </div>
                      ) : (
                        <>
                          <img
                            src="/sukses.png"
                            className="img-fluid"
                            alt=""
                            style={{ height: "100px" }}
                          ></img>
                          <h5 className="mt-4 text-secondary">
                            <strong>
                              Hei, {localStorage.getItem("nama")}{" "}
                            </strong>
                            <br></br>
                            Pembayaran anda berhasil dikirim silahkan menunggu
                            persetujuan pembayaran anda
                          </h5>
                          <a
                            href={"/formbooking/" + idlapangan}
                            className="btn mt-5"
                            style={{
                              backgroundColor: "#2b2e5a",
                              color: "white",
                            }}
                          >
                            Tutup popup
                          </a>
                        </>
                      )}
                    </center>
                  </>
                )}
              </div>
            )}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
