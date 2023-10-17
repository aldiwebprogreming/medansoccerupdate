import React from "react";
import { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

export default function Install() {
  const [supportsPWA, setSupportsPWA] = useState(true);
  const [promptInstall, setPromptInstall] = useState(null);

  const resvonsive = {
    0: {
      items: 2.5,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  };

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    // return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (!supportsPWA) {
    return null;
  }
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#2b2e5a",
        borderRadius: "0px",
      }}
    >
      <div className="" style={{ marginTop: "200px", marginBottom: "200px" }}>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={4}
          nav
          responsive={resvonsive}
          dotsEach
          mouseDrag={true}
          touchDrag={true}

          // autoplay
        >
          <div className="item">
            <img className="img-fluid" src="img/slide1.png" alt="" />
          </div>
          <div className="item">
            <img className="img-fluid" src="img/home.png" alt="" />
          </div>

          <div className="item">
            <img className="img-fluid" src="img/slide3.png" alt="" />
          </div>
          <div className="item">
            <img className="img-fluid" src="img/slide4.png" alt="" />
          </div>
          <div className="item">
            <img className="img-fluid" src="img/slide5.png" alt="" />
          </div>
          <div className="item">
            <img className="img-fluid" src="img/slide6.png" alt="" />
          </div>
        </OwlCarousel>
        <center>
          <button
            onClick={onClick}
            className="btn fw-bold mt-4"
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "20px",
            }}
          >
            Instal sekarang juga diperangkat anda
          </button>
          <p className="mt-3">
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <i className="fas fa-angle-left"></i> Back to home
            </Link>
          </p>
        </center>
      </div>
      {/* <button
        className="link-button"
        id="setup_button"
        aria-label="Install app"
        title="Install app"
        onClick={onClick}
      >
        Install
      </button>
      <p>React</p> */}
    </div>
  );
}
