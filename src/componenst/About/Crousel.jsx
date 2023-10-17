import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Crousel() {
  const resvonsive = {
    0: {
      items: 1.5,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 1.5,
    },
  };

  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={4}
        nav={false}
        responsive={resvonsive}
        dotsEach
        autoplay
      >
        <div className="item shadow">
          <div className="card shadow">
            <img
              src="/img/lap1.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="item shadow">
          <div className="card shadow">
            <img
              src="/img/lap2.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
        <div className="item shadow">
          <div className="card shadow">
            <img
              src="/img/lap3.jpeg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>

      </OwlCarousel>
    </div>
  );
}
