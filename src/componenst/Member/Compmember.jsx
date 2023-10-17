import axios from "axios";
import React, { useEffect } from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";

import Compalert from "./Compalert";

import Offcanvas from "react-bootstrap/Offcanvas";
import Compbayar from "./Compbayar";

export default function Compmember({ props }) {
  const [show, setShow] = useState(false);
  const [awal, setAwal] = useState(true);
  const [datauser, setDatauser] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [sisamain, setSisamain] = useState(null);
  const handleClose = () => {
    setShow(false);
    setPagebayar(false);
    setPageqty(true);
  };
  const handleShow = () => setShow(true);

  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(200);
  const [pageqty, setPageqty] = useState(true);
  const [pagebayar, setPagebayar] = useState(false);

  const tambah = () => {
    setQty(qty + 1);
  };
  const kurang = () => {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  const PayMember = async () => {
    await axios
      .post(urlapi + "PayMember", {
        nama: localStorage.getItem("nama"),
        email: localStorage.getItem("email"),
        total: total * qty,
      })
      .then((response) => {
        const token = response.data.token;
        if (token) {
          window.snap.pay(token, {
            onSuccess: (result) => {
              setShow(false);
              // console.log(result);
              addMemberkarir(result);
              getMember();
              setAwal(false);
            },
            onPending: (result) => {
              setShow(false);
              addMemberkarir(result);
              getMember();
            },
            onError: (result) => {
              console.log(result.status_message);
              setShow(false);
            },
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addMemberkarir = async (result) => {
    await axios
      .post(urlapi + "AddMemberKarir", {
        nama: localStorage.getItem("nama"),
        id: localStorage.getItem("id"),
        email: localStorage.getItem("email"),
        waktu_member: qty,
        total_harga: qty * total,
        status_pembayaran: result.status_code,
        pdf_url: result.pdf_url,
      })
      .then((response) => {
        console.log(response);
        setShow(false);
        setAwal(true);
        getMember();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getMember = async () => {
    try {
      const response = await axios.get(
        urlapi + "AddMemberKarir?id_user=" + localStorage.getItem("id")
      );
      console.log(response.data);
      if (response.data.sisa_bermain == 0) {
        setAwal(true);
      } else {
        setAwal(false);
      }
      setSisamain(response.data.sisa_bermain);
      setDatauser(response.data);
    } catch (error) {
      // console.log(error.message);
    }
  };

  const Renderalert = () => {
    if (datauser.status_pembayaran == 200) {
      return <Compalert statuscode="200" pdfurl={datauser.pdf_url} />;
    } else {
      return <Compalert statuscode="201" pdfurl={datauser.pdf_url} />;
    }
  };

  const handlepage = () => {
    setPageqty(false);
    setPagebayar(true);
  };

  useEffect(() => {
    getMember();
  }, []);

  return (
    <div>
      {awal ? (
        <div>
          {" "}
          <div className="card" style={{ borderRadius: "0px", height: "100" }}>
            <div className="card-body">
              <img src="karir.svg" class="img-fluid" alt="..." />
              <h4 className="mt-4 text-danger text-left fw-bold">
                Apa itu member karir ?
              </h4>
              <p className="text-secondary">
                Member karir adalah fitur untuk bermain secara random dengan
                team yang telah di sediakan oleh aplikasi medan mini soccer,
                masing - masing team terdiri dari 10 pemain yang mana 10 pemain
                tersebut sebelumnya sudah melakukan join member karir di
                aplikasi medan mini soccer dan anda hanya dapat bermain satu
                kali dalam satu hari.
              </p>

              {sisamain == 0 ? (
                <Button variant="danger" className="w-100" onClick={handleShow}>
                  Beli slot member karir <i className="fas fa-futbol"></i>
                </Button>
              ) : (
                <Button variant="danger w-100" onClick={handleShow}>
                  Daftar member karir
                </Button>
              )}

              <Offcanvas
                show={show}
                onHide={handleClose}
                placement="bottom"
                style={{ height: "500px", white: "200px" }}
              >
                <Offcanvas.Header closeButton>
                  <div className="container">
                    <Offcanvas.Title>Member karir</Offcanvas.Title>
                  </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* componen bayar */}
                  <div className={pagebayar == true ? "" : "d-none"}>
                    <Compbayar qty={qty} total={total} />
                  </div>
                  {/* end */}

                  <div className={`container ${pageqty ? "" : "d-none"}`}>
                    <p>
                      Pembayaran member karir untuk saat ini hanya dapat di
                      lakukan dengan
                      <strong> BANK TRANSFER</strong> dengan nomor rekening
                      tujuan
                      <strong>
                        {" "}
                        REK BCA : 6475383951 a/n Pendy Or Handoko{" "}
                      </strong>
                    </p>
                    <hr></hr>
                    <div className="d-flex justify-content-between">
                      <h4 className="text-danger">
                        <strong>Rp 200.000</strong>
                      </h4>
                      <div>
                        <button onClick={kurang} className="btn btn-danger">
                          -
                        </button>{" "}
                        <label className="fw-bold">{qty} Bulan</label>
                        {"  "}
                        <button onClick={tambah} className="btn btn-danger">
                          +
                        </button>
                      </div>
                    </div>
                    <input
                      type="text"
                      placeholder="Kode voucher"
                      className="form-control mt-3"
                    />
                    <small className="text-secondary">
                      Dapatkan potongan harga dengan memasukan kode voucher
                    </small>

                    <div class="fixed-bottom">
                      <div className="container">
                        <div className="container">
                          <h5 className="">
                            <strong>
                              {" "}
                              Rp {total * qty}
                              {".000"}
                            </strong>
                          </h5>
                          <button
                            onClick={() => handlepage()}
                            className="btn btn-danger w-100"
                          >
                            Bayar sekarang
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Renderalert />
        </div>
      )}
    </div>
  );
}
