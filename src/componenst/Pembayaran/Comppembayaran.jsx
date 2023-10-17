import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Comppembayaran({
  totalharga,
  tglbooking,
  jammulai,
  jamberakhir,
  lapangan,
}) {
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [wasit, setWasit] = useState(false);
  const [bola, setBola] = useState(false);
  const [rompi, setRompi] = useState(false);
  const [poto, setPoto] = useState(false);
  const [booking, setBooking] = useState(true);
  const [datawasit, setDatawasit] = useState([]);
  const [databola, setDatabola] = useState([]);
  const [datarompi, setDatarompi] = useState([]);
  const [datapoto, setDatapoto] = useState([]);
  const [hargawasit, setHargawasit] = useState(0);
  const [hargabola, setHargabola] = useState(0);
  const [hargarompi, setHargarompi] = useState(0);
  const [hargapoto, setHargapoto] = useState(0);
  const [bagiharga, setBagiharga] = useState("lunas");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalhargasemua =
    parseInt(totalharga) +
    parseInt(hargawasit) +
    parseInt(hargabola) +
    parseInt(hargarompi) +
    parseInt(hargapoto);

  const formatrupiah = (numb) => {
    const format = numb.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");
    return rupiah;
  };

  const handlebagi = (e) => {
    setBagiharga(e);
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

  useEffect(() => {
    getwasit();
    getbola();
    getrompi();
    getpoto();
  }, []);

  return (
    <div>
      <div
        className="card shadow"
        style={{ border: "none", marginTop: "70px" }}
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
                    +{ws.harga}{" "}
                    <input
                      className="form-check-input"
                      type="radio"
                      name="ws"
                      id="ws"
                      value={ws.harga}
                      onClick={() => setHargawasit(ws.harga)}
                    ></input>
                  </p>
                </div>
              );
            })}
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
                    +{bl.harga}{" "}
                    <input
                      className="form-check-input"
                      type="radio"
                      name="bola"
                      id="bola"
                      value={bl.harga}
                      onClick={() => setHargabola(bl.harga)}
                    ></input>
                  </p>
                </div>
              );
            })}
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
                    +{rm.harga}{" "}
                    <input
                      className="form-check-input"
                      type="radio"
                      name="rompi"
                      id="rompi"
                      value={rm.harga}
                      onClick={() => setHargarompi(rm.harga)}
                    ></input>
                  </p>
                </div>
              );
            })}
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
                    +{pt.harga}{" "}
                    <input
                      className="form-check-input"
                      type="radio"
                      name="poto"
                      id="poto"
                      value={pt.harga}
                      onClick={() => setHargapoto(pt.harga)}
                    ></input>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div class="fixed-bottom mt-5">
          <div className="card" style={{ borderRadius: "0px", border: "0" }}>
            <div className="card-boyd">
              <div class="d-flex justify-content-around my-3">
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
                    <div className="container">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          onClick={() => handlebagi("lunas")}
                          id="lunas"
                          value="Lunas"
                          checked
                        />
                        <label class="form-check-label" for="inlineRadio1">
                          Lunas
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          onClick={() => handlebagi("dp")}
                          id="dp"
                          value="DP"
                        />
                        <label class="form-check-label" for="inlineRadio2">
                          DP
                        </label>
                      </div>
                      <div className="row">
                        <div class="row">
                          <div class="form-group col-md-6 mt-3">
                            <input
                              type="number"
                              className="form-control"
                              value={
                                bagiharga == "lunas"
                                  ? totalhargasemua
                                  : totalhargasemua / 2
                              }
                            ></input>
                          </div>
                          <div class="form-group col-md-6 mt-3">
                            <select className="form-control">
                              <option value="Lainya">
                                -- Pilih Bank Anda --
                              </option>
                              <option>BRI</option>
                              <optin>BCA</optin>
                              <option>BNI</option>
                              <option>BSI</option>
                              <option>Mandiri</option>
                              <option>Danamon</option>
                              <option>CIMB Niaga</option>
                              <option>Bank Sumut</option>
                              <option>Lainya</option>
                            </select>
                          </div>
                          <div class="form-group col-md-6 mt-3">
                            <input
                              type="text"
                              class="form-control"
                              id="inputEmail4"
                              placeholder="Atas nama"
                            />
                          </div>

                          <div class="form-group col-md-6 mt-3">
                            <input
                              type="number"
                              class="form-control"
                              id="inputEmail4"
                              placeholder="Nomor whatsapp"
                            />
                          </div>
                          <div class="form-group col-md-6 mt-3">
                            <input
                              type="file"
                              class="form-control"
                              id="inputEmail4"
                            />
                            <small>
                              Masukan bukti pembayaran dengan format Gambar
                              (JPG, JPEG & PNG)
                            </small>
                          </div>
                          <div class="form-group col-md-6 mt-3">
                            <textarea
                              className="form-control"
                              name="keterangan"
                              placeholder="Keterangan"
                            ></textarea>
                          </div>
                        </div>
                        <Button
                          variant="btn rounded-pill fw-100 mt-4"
                          onClick={handleShow}
                          style={{ backgroundColor: "#2b2e5a", color: "white" }}
                        >
                          Bayar sekarang
                        </Button>
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
