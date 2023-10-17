import React from "react";
import { useState } from "react";
import { imageDb } from "../../firebase";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import { FileUploader } from "react-drag-drop-files";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
import axios from "axios";

const urlapi = process.env.REACT_APP_BASE_URL;

function MyVerticallyCenteredModal(props) {
  //   const [file, setFile] = useState(null);
  const [img, setImg] = useState("");
  const [nameImg, setNameImg] = useState("");
  const [valueimg, setvalueimg] = useState("");
  const [formatImg, setFormatImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [pesan, setPesan] = useState(false);

  //   const handleChange = (file) => {
  //     setFile(file);
  //     console.log(file);
  //   };

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
    // console.log(e);
    setvalueimg(e.target.value);
    setNameImg(e.target.files[0].name);
  };

  const handleUpload = () => {
    const imgRef = ref(imageDb, `files/${nameImg}`);
    uploadBytes(imgRef, img);
    console.log(imgRef._location.path_);

    setLoading(true);

    setTimeout(() => {
      getDownloadURL(ref(imageDb, `files/${nameImg}`)).then((url) => {
        updateProfil(url);
      });
    }, 3000);
  };

  const updateProfil = async (url) => {
    await axios
      .post(urlapi + "Updateprofil", {
        iduser: localStorage.getItem("id"),
        urlimg: url,
      })
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        setPesan(true);
        setvalueimg("");
      })
      .catch(console.error());
  };

  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ubah foto profil anda {"  "} <i className="far fa-circle-user"></i>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="file"
          onChange={(e) => handleChangeImg(e)}
          className="form-control"
          value={valueimg}
        ></input>

        {loading ? (
          <p className="text-center mt-3 fw-bold">😁 Loading .....</p>
        ) : (
          ""
        )}

        {pesan ? (
          <p className="text-center fw-bold mt-3 text-success">
            {" "}
            🤩 Update profil success
          </p>
        ) : (
          ""
        )}
      </Modal.Body>
      <hr />

      <div className="container mb-3">
        {pesan ? (
          <button
            className="w-100 btn btn-secondary"
            onClick={props.onHide}
            style={{ marginRight: "10px" }}
          >
            Close
          </button>
        ) : (
          <>
            {" "}
            <div className="d-flex justify-content-between">
              <button
                className="w-100 btn btn-secondary"
                onClick={props.onHide}
                style={{ marginRight: "10px" }}
              >
                NO
              </button>

              <button
                onClick={handleUpload}
                className="btn w-100"
                style={{ backgroundColor: "#2b2e5a", color: "white" }}
              >
                Yes
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}

export default function Compubahfoto() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="container" style={{ position: "relative", bottom: "60px" }}>
      <Button
        className="w-100 rounded-pill"
        variant="btn"
        onClick={() => setModalShow(true)}
        style={{ backgroundColor: "#2b2e5a", color: "white" }}
      >
        Update foto profil anda {"  "} <i className="far fa-circle-user"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
