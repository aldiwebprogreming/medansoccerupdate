import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function CompSlide({ gambar }) {

  const resvonsive = {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  };

  return (
    <div>

      <div className="container mb-3">
        <div className="compslide" style={{ border: "none" }}>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={4}
            nav={false}
            responsive={resvonsive}
            dotsEach
            autoplay
          >
            <div className="card item" style={{
              height: '200px', backgroundImage: `url(${gambar})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
              <div className="card-body" >

              </div>
            </div>
            <div className="card item" style={{
              height: '200px', backgroundImage: `url('/img/lap2.jpeg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
              <div className="card-body" >

              </div>
            </div>

            <div className="card item" style={{
              height: '200px', backgroundImage: `url('/img/lap3.jpeg')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}>
              <div className="card-body" >

              </div>
            </div>
          </OwlCarousel>
        </div>

      </div>
      {/* <div className="container">
        <div
          className="card compslide shadow"
          style={{
            backgroundImage: `url(${gambar})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div> */}
    </div>
  );
}
