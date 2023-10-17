import axios from "axios";
import React, { useEffect } from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Compalert from "./Compalert";

import Offcanvas from "react-bootstrap/Offcanvas";

export default function Compmember({ props }) {
  const [show, setShow] = useState(false);
  const [awal, setAwal] = useState(true);
  const [datauser, setDatauser] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;
  const [sisamain, setSisamain] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [qty, setQty] = useState(1);
  const [total, setTotal] = useState(200);

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
      console.log(error.message);
    }
  };

  const Renderalert = () => {
    if (datauser.status_pembayaran == 200) {
      return <Compalert statuscode="200" pdfurl={datauser.pdf_url} />;
    } else {
      return <Compalert statuscode="201" pdfurl={datauser.pdf_url} />;
    }
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
                <Button variant="danger" className="w-100" onClick={handleShow}>
                  Daftar member karir <i className="fas fa-futbol"></i>
                </Button>
              )}

              <Modal
                {...props}
                show={show}
                onHide={handleClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Pay member karir</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <img src="pay.png" class="img-fluid" alt="..." />

                  <div className="d-flex justify-content-between">
                    <h4 className="text-danger">Rp 200.000</h4>
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
                  <div className="d-flex justify-content-between mt-3">
                    <p className="fw-bold">Total :</p>
                    <p className="fw-bold">
                      Rp {total * qty}
                      {".000"}
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    type="submit"
                    onClick={PayMember}
                    className="w-100"
                    variant="primary"
                  >
                    Bayar sekarng <i className="fas fa-receipt"></i>
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* <button className="btn btn-danger w-100">
            Daftar member karir <i className="fas fa-futbol"></i>
          </button> */}
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
