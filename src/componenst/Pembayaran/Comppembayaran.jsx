import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { imageDb } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function Comppembayaran({
  totalharga,
  tglbooking,
  jammulai,
  jamberakhir,
  lapangan,
  idlapangan,
}) {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [wasit, setWasit] = useState(false);
  const [bola, setBola] = useState(false);
  const [rompi, setRompi] = useState(false);
  const [poto, setPoto] = useState(false);
  const [video, setVideo] = useState(false);
  const [booking, setBooking] = useState(true);
  const [datawasit, setDatawasit] = useState([]);
  const [databola, setDatabola] = useState([]);
  const [datarompi, setDatarompi] = useState([]);
  const [datapoto, setDatapoto] = useState([]);
  const [datavideo, setDatavideo] = useState([]);
  const [hargawasit, setHargawasit] = useState(0);
  const [hargabola, setHargabola] = useState(0);
  const [hargarompi, setHargarompi] = useState(0);
  const [hargapoto, setHargapoto] = useState(0);
  const [hargavideo, setHargavideo] = useState(0);
  const [bagiharga, setBagiharga] = useState("lunas");

  const [nameImg, setNameImg] = useState("");
  const [valueimg, setvalueimg] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(true);
  const [sukses, setSukses] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dp, setDp] = useState("Lunas");
  const [atasnama, setAtasnama] = useState("");
  const [wa, setWa] = useState("");
  const [team, setTeam] = useState("");
  const [bank, setBank] = useState("");
  const [uang, setUang] = useState("");
  const [ket, setKet] = useState("");
  const [valwasit, setValwasit] = useState("");
  const [valrompi, setValrompi] = useState("");
  const [valbola, setValbola] = useState("");
  const [valpoto, setValpoto] = useState("");
  const [valvideo, setValvideo] = useState("");

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
    console.log(e);
    setvalueimg(e.target.value);
    setNameImg(e.target.files[0].name);
  };

  const handleBooking = () => {
    setForm(false);
    setLoading(true);
    const imgRef = ref(imageDb, `files/${nameImg}`);
    uploadBytes(imgRef, img);
    console.log(imgRef._location.path_);

    setTimeout(() => {
      getDownloadURL(ref(imageDb, `files/${nameImg}`)).then((url) => {
        console.log("prosess");

        addbooking(url);
      });
    }, 15000);
  };

  const addbooking = async (url) => {
    await axios
      .post(urlapi + "Addbooking2", {
        nama: localStorage.getItem("nama"),
        iduser: localStorage.getItem("id"),
        lapangan: lapangan,
        idlapangan: idlapangan,
        tgl: tglbooking,
        harga: totalharga,
        total_harga: totalhargasemua,
        team: team,
        jam_mulai: jammulai,
        jam_berakhir: jamberakhir,
        bank: bank,
        uang: uang,
        atasnama: atasnama,
        wa: wa,
        dp: dp,
        ket: ket,
        bukti: url,
        wasit: valwasit,
        bola: valbola,
        rompi: valrompi,
        poto: valpoto,
        video: valvideo,
      })

      .then((response) => {
        console.log(response.data);
        // sendwa(response.data.kode_booking);
        if (response.data.message == true) {
          setLoading(false);
          setSukses(true);
        }
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const handlewasit = (harga, id) => {
    if (harga == 0) {
      setValwasit("");
      setHargawasit(harga);
    } else {
      setHargawasit(harga);
      setValwasit(id);
    }
  };
  const handlebola = (harga, id) => {
    if (harga == 0) {
      setHargabola(harga);
      setValbola("");
    } else {
      setHargabola(harga);
      setValbola(id);
    }
  };
  const handlerompi = (harga, id) => {
    if (harga == 0) {
      setHargarompi(harga);
      setValrompi("");
    } else {
      setHargarompi(harga);
      setValrompi(id);
    }
  };
  const handlepoto = (harga, id) => {
    if (harga == 0) {
      setHargapoto(harga);
      setValpoto("");
    } else {
      setHargapoto(harga);
      setValpoto(id);
    }
  };

  const handlevideo = (harga, id) => {
    if (harga == 0) {
      setHargavideo(harga);
      setValvideo("");
    } else {
      setHargavideo(harga);
      setValvideo(id);
    }
  };

  const totalhargasemua =
    parseInt(totalharga) +
    parseInt(hargawasit) +
    parseInt(hargabola) +
    parseInt(hargarompi) +
    parseInt(hargapoto) +
    parseInt(hargavideo);

  const formatrupiah = (numb) => {
    const format = numb.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");
    return rupiah;
  };

  const date = new Date();
  let tgl = new Date();
  let tgl_sekarang =
    tgl.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + tgl.getDate()).slice(-2);

  const handlebagi = (e) => {
    setBagiharga(e);
    setDp(e);
  };
  const getwasit = async () => {
    try {
      const response = await axios.get(urlapi + "Wasit");
      setDatawasit(response.data);
    } catch (error) {}
  };
  const getbola = async () => {
    try {
      const response = await axios.get(urlapi + "Bola");
      setDatabola(response.data);
    } catch (error) {}
  };
  const getrompi = async () => {
    try {
      const response = await axios.get(urlapi + "Rompi");
      setDatarompi(response.data);
    } catch (error) {}
  };
  const getpoto = async () => {
    try {
      const response = await axios.get(urlapi + "Poto");
      setDatapoto(response.data);
    } catch (error) {}
  };

  const getvideo = async () => {
    try {
      const response = await axios.get(urlapi + "Video");
      setDatavideo(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getwasit();
    getbola();
    getrompi();
    getpoto();
    getvideo();
  }, []);

  return (
    <div>
      <div
        className="card shadow"
        style={{ border: "none", marginTop: "30px" }}
      >
        <div className="card-body">
          <p>
            Pembayaran booking lapangan hanya dapat di lakukan dengan BANK
            TRANSFER dengan nomor rekening tujuan REK BCA : 6475383951 a/n Pendy
            Or Handoko, Pembayaran Booking Lapangan Wajib DP 50% dari Harga yang
            sudah di tentukan, dengan syarat pelunasan (H-1) 1 hari sebelum
            jadwal main
          </p>
        </div>
      </div>

      <div
        className="card  shadow"
        style={{ border: "none", marginTop: "10px" }}
      >
        <div className="card-body">
          <h5> </h5>
          <div
            onClick={() => setBooking(!booking)}
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold">
              Bookingan anda <br />
            </p>
            <div>
              <i
                className={booking ? "fas fa-angle-down" : "fas fa-angle-right"}
              ></i>
            </div>
          </div>

          <div className={booking ? "" : "d-none"}>
            <hr />
            <p className="fw-bold">{lapangan}</p>
            <div className="d-flex justify-content-between text-secondary">
              {" "}
              <p className="fw-bold">
                <i className="far fa-calendar-days"></i> {tglbooking}
              </p>
              <p className="fw-bold">
                <i className="far fa-clock"></i> {jammulai + "-" + jamberakhir}
              </p>
            </div>
            <span className="badge text-bg-dark fw-bold">
              {totalharga == "" ? "Rp.0" : formatrupiah(totalharga)}
            </span>{" "}
          </div>
        </div>
      </div>

      <div
        className="card  shadow"
        style={{ border: "none", marginTop: "10px" }}
      >
        <div className="card-body">
          <h5> </h5>
          <div
            onClick={() => setWasit(!wasit)}
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold">
              Wasit <br />
              <small className="text-secondary">Opsional</small>
            </p>
            <div>
              <i
                className={
                  valwasit == ""
                    ? "d-none"
                    : "fas fa-circle-check text-primary mx-3"
                }
              ></i>
              <i
                className={wasit ? "fas fa-angle-down" : "fas fa-angle-right"}
              ></i>
            </div>
          </div>

          <div className={wasit ? "" : "d-none"}>
            <hr />

            {datawasit.map((ws, index) => {
              return (
                <div className="d-flex justify-content-between" key={index}>
                  <p>{ws.lisensi}</p>
                  <p>
                    +{formatrupiah(ws.harga)}{" "}
                    <input
                      className="form-check-input border-primary"
                      type="radio"
                      name="ws"
                      id="ws"
                      value={ws.id}
                      onClick={() => handlewasit(ws.harga, ws.id)}
                    ></input>
                  </p>
                </div>
              );
            })}

            <div className="d-flex justify-content-between">
              <p>Tanpa wasit</p>
              <p>
                +{formatrupiah(0)}{" "}
                <input
                  className="form-check-input border-primary"
                  type="radio"
                  name="ws"
                  id="ws"
                  onClick={() => handlewasit(0)}
                ></input>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card  shadow"
        style={{ border: "none", marginTop: "15px" }}
      >
        <div className="card-body">
          <h5> </h5>
          <div
            onClick={() => setBola(!bola)}
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold">
              Bola <br />
              <small className="text-secondary">Opsional</small>
            </p>
            <div>
              <i
                className={
                  valbola == ""
                    ? "d-none"
                    : "fas fa-circle-check text-primary mx-3"
                }
              ></i>
              <i
                className={bola ? "fas fa-angle-down" : "fas fa-angle-right"}
              ></i>
            </div>
          </div>

          <div className={bola ? "" : "d-none"}>
            <hr />
            {databola.map((bl, index) => {
              return (
                <div className="d-flex justify-content-between" key={index}>
                  <p>
                    {bl.bola} - {bl.grade}
                  </p>
                  <p>
                    +{formatrupiah(bl.harga)}{" "}
                    <input
                      className="form-check-input border-primary"
                      type="radio"
                      name="bola"
                      id="bola"
                      value={bl.id}
                      onClick={() => handlebola(bl.harga, bl.id)}
                    ></input>
                  </p>
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <p>Bola MMS</p>
              <p>
                +{formatrupiah(0)}{" "}
                <input
                  className="form-check-input border-primary"
                  type="radio"
                  name="bola"
                  id="bola"
                  onClick={() => handlebola(0)}
                ></input>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card  shadow"
        style={{ border: "none", marginTop: "15px" }}
      >
        <div className="card-body">
          <h5> </h5>
          <div
            onClick={() => setRompi(!rompi)}
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold">
              Rompi <br />
              <small className="text-secondary">Opsional</small>
            </p>
            <div>
              <i
                className={
                  valrompi == ""
                    ? "d-none"
                    : "fas fa-circle-check text-primary mx-3"
                }
              ></i>
              <i
                className={rompi ? "fas fa-angle-down" : "fas fa-angle-right"}
              ></i>
            </div>
          </div>

          <div className={rompi ? "" : "d-none"}>
            <hr />
            {datarompi.map((rm, index) => {
              return (
                <div className="d-flex justify-content-between" key={index}>
                  <p>
                    {rm.rompi} - {rm.grade}
                  </p>
                  <p>
                    +{formatrupiah(rm.harga)}{" "}
                    <input
                      className="form-check-input border-primary"
                      type="radio"
                      name="rompi"
                      id="rompi"
                      value={rm.id}
                      onClick={() => handlerompi(rm.harga, rm.id)}
                    ></input>
                  </p>
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <p>Tanpa rompi</p>
              <p>
                +{formatrupiah(0)}{" "}
                <input
                  className="form-check-input border-primary"
                  type="radio"
                  name="rompi"
                  id="rompi"
                  onClick={() => handlerompi(0)}
                ></input>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card shadow"
        style={{ border: "none", marginTop: "15px" }}
      >
        <div className="card-body">
          <h5> </h5>
          <div
            onClick={() => setPoto(!poto)}
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold">
              Fotograper
              <br />
              <small className="text-secondary">Opsional</small>
            </p>
            <div>
              <i
                className={
                  valpoto == ""
                    ? "d-none"
                    : "fas fa-circle-check text-primary mx-3"
                }
              ></i>
              <i
                className={poto ? "fas fa-angle-down" : "fas fa-angle-right"}
              ></i>
            </div>
          </div>

          <div className={poto ? "" : "d-none"}>
            <hr />

            {datapoto.map((pt, index) => {
              return (
                <div className="d-flex justify-content-between" key={index}>
                  <p>{pt.nama}</p>
                  <p>
                    +{formatrupiah(pt.harga)}{" "}
                    <input
                      className="form-check-input border-primary"
                      type="radio"
                      name="poto"
                      id="poto"
                      value={pt.id}
                      onClick={() => handlepoto(pt.harga, pt.id)}
                    ></input>
                  </p>
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <p>Tanpa Fotograper</p>
              <p>
                +{formatrupiah(0)}{" "}
                <input
                  className="form-check-input border-primary"
                  type="radio"
                  name="poto"
                  id="poto"
                  onClick={() => handlepoto(0)}
                ></input>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card shadow"
        style={{ border: "none", marginTop: "15px", marginBottom: "100px" }}
      >
        <div className="card-body">
          <h5> </h5>
          <div
            onClick={() => setVideo(!video)}
            className="d-flex justify-content-between"
            style={{ cursor: "pointer" }}
          >
            <p className="fw-bold">
              Videograper
              <br />
              <small className="text-secondary">Opsional</small>
            </p>
            <div>
              <i
                className={
                  valvideo == ""
                    ? "d-none"
                    : "fas fa-circle-check text-primary mx-3"
                }
              ></i>
              <i
                className={video ? "fas fa-angle-down" : "fas fa-angle-right"}
              ></i>
            </div>
          </div>

          <div className={video ? "" : "d-none"}>
            <hr />

            {datavideo.map((vd, index) => {
              return (
                <div className="d-flex justify-content-between" key={index}>
                  <p>{vd.nama}</p>
                  <p>
                    +{formatrupiah(vd.harga)}{" "}
                    <input
                      className="form-check-input border-primary"
                      type="radio"
                      name="poto"
                      id="poto"
                      value={vd.id}
                      onClick={() => handlevideo(vd.harga, vd.id)}
                    ></input>
                  </p>
                </div>
              );
            })}
            <div className="d-flex justify-content-between">
              <p>Tanpa Videograper</p>
              <p>
                +{formatrupiah(0)}{" "}
                <input
                  className="form-check-input border-primary"
                  type="radio"
                  name="poto"
                  id="poto"
                  onClick={() => handlevideo(0)}
                ></input>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="fixed-bottom mt-5">
          <div className="card" style={{ borderRadius: "0px", border: "0" }}>
            <div className="card-boyd">
              <div className="d-flex justify-content-around my-3">
                <div>
                  {totalharga == false ? (
                    <p className="fw-bold mt-1">
                      Total : Rp. {formatrupiah(0)}
                    </p>
                  ) : (
                    <p className="fw-bold mt-1">
                      Total : {formatrupiah(totalhargasemua)}
                    </p>
                  )}
                </div>
                <Button
                  variant="btn rounded-pill"
                  onClick={handleShow}
                  style={{ backgroundColor: "#2b2e5a", color: "white" }}
                >
                  Bayar sekarang
                </Button>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  placement="bottom"
                  style={{ height: "70%" }}
                >
                  <Offcanvas.Header closeButton>
                    <div className="container">
                      <Offcanvas.Title>Pembayaran</Offcanvas.Title>
                    </div>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {/* loading */}
                    <div id="loading" className={loading ? "" : "d-none"}>
                      <div
                        className="text-center"
                        style={{ marginTop: "130px" }}
                      >
                        <div
                          className="spinner-grow text-primary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-secondary"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div
                          className="spinner-grow text-success"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <br></br>
                        <label>Loading....</label>
                        <p className="text-center">
                          Mohon untuk menunggu proses pembayaran
                        </p>
                      </div>
                    </div>
                    {/* end */}

                    {/* alertsukses */}
                    <div className={sukses ? "container" : "d-none"}>
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
                          Pembayaran anda berhasil dikirim silahkan menunggu
                          persetujuan pembayaran anda
                        </h5>
                        <a
                          href={"/formbooking/" + idlapangan}
                          className="btn mt-3"
                          style={{
                            backgroundColor: "#2b2e5a",
                            color: "white",
                          }}
                        >
                          Tutup popup
                        </a>
                      </center>
                    </div>
                    {/* end */}

                    <div className={form ? "container" : "d-none"}>
                      <div class="form-check form-check-inline">
                        <input
                          className="form-check-input border-primary"
                          type="radio"
                          name="inlineRadioOptions"
                          onClick={() => handlebagi("lunas")}
                          id="lunas"
                          value="Lunas"
                        />

                        <label className="form-check-label" for="inlineRadio1">
                          Lunas
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input border-primary"
                          type="radio"
                          name="inlineRadioOptions"
                          onClick={() => handlebagi("dp")}
                          id="dp"
                          value="DP"
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          DP 50%
                        </label>
                      </div>
                      <div className="row">
                        <div className="row">
                          <div className="form-group col-md-6 mt-3">
                            <input
                              type="text"
                              className="form-control"
                              value={
                                bagiharga == "lunas"
                                  ? totalhargasemua
                                  : totalhargasemua / 2
                              }
                            ></input>
                          </div>
                          <div className="form-group col-md-6 mt-3">
                            <select
                              className="form-control"
                              onChange={(e) => setBank(e.target.value)}
                            >
                              <option value="Laid4enya">
                                -- Pilih Bank Anda --
                              </option>
                              <option>BRI</option>
                              <option>BCA</option>
                              <option>BNI</option>
                              <option>BSI</option>
                              <option>Mandiri</option>
                              <option>Danamon</option>
                              <option>CIMB Niaga</option>
                              <option>Bank Sumut</option>
                              <option>Lainya</option>
                            </select>
                          </div>
                          <div className="form-group col-md-6 mt-3">
                            <input
                              type="text"
                              className="form-control"
                              id="inputEmail4"
                              onChange={(e) => setAtasnama(e.target.value)}
                              placeholder="Atas nama"
                            />
                          </div>

                          <div className="form-group col-md-6 mt-3">
                            <input
                              type="number"
                              className="form-control"
                              id="inputEmail4"
                              onChange={(e) => setWa(e.target.value)}
                              placeholder="Nomor whatsapp"
                            />
                          </div>
                          <div className="form-group col-md-6 mt-3">
                            <input
                              type="text"
                              className="form-control"
                              id=""
                              onChange={(e) => setTeam(e.target.value)}
                              placeholder="Nama team"
                            />
                          </div>
                          <div className="form-group col-md-6 mt-3">
                            <input
                              type="file"
                              onChange={(e) => handleChangeImg(e)}
                              className="form-control"
                              id="inputEmail4"
                            />
                            <small>
                              Masukan bukti pembayaran dengan format Gambar
                              (JPG, JPEG & PNG)
                            </small>
                          </div>
                          <div className="form-group col-md-6 mt-3">
                            <textarea
                              className="form-control"
                              name="keterangan"
                              onChange={(e) => setKet(e.target.value)}
                              placeholder="Keterangan (opsional)"
                            ></textarea>
                          </div>
                        </div>
                        {team == "" ||
                        wa == "" ||
                        atasnama == "" ||
                        bank == "" ||
                        img == "" ? (
                          <Button
                            variant="btn rounded-pill fw-100 mt-4"
                            disabled
                            style={{
                              backgroundColor: "#2b2e5a",
                              color: "white",
                            }}
                          >
                            Bayar sekarang
                          </Button>
                        ) : (
                          <Button
                            variant="btn rounded-pill fw-100 mt-4"
                            onClick={() => handleBooking()}
                            style={{
                              backgroundColor: "#2b2e5a",
                              color: "white",
                            }}
                          >
                            Bayar sekarang
                          </Button>
                        )}
                      </div>
                    </div>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
