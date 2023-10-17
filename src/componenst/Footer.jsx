import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="" style={{ marginTop: "100px" }}></div>
      <div
        className="card fixed-bottom"
        style={{
          borderRadius: "0px",
          zIndex: "9999",
          width: "100%",
          border: "0px",
          height: "70px",
          backgroundColor: "#c9b2be",
        }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <div className="row">
                {/* <div
                  className="text-center"
                  style={{
                    position: "absolute",
                    right: "10px",
                    bottom: "20px",
                    height: "50px",
                    width: "70px",
                    backgroundColor: "orange",
                    borderRadius: "0px 50px",
                  }}
                >
                  <i class="fa-regular fa-user"></i>
                  <p>Profil</p>
                </div> */}
                <div className="col-sm-3 col-3 text-center mb-5">
                  <i className="fas fa-house" style={{ fontSize: "20px" }}></i>
                  <p>Home</p>
                </div>
                <div className="col-sm-3 col-3 text-center">
                  <i
                    className="far fa-calendar-days"
                    style={{ fontSize: "20px" }}
                  ></i>
                  <p>Booking</p>
                </div>

                <div className="col-sm-3 col-3 text-center">
                  <i className="far fa-heart" style={{ fontSize: "20px" }}></i>
                  <p>Data main</p>
                </div>

                <div className="col-sm-3 col-3 text-center mb-5">
                  <i class="fa-regular fa-user"></i>
                  <p>Profil</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
