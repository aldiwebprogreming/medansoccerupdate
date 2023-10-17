import React from "react";

export default function Compheader() {
  return (
    <div>
      <div
        className="card bg-danger text-white"
        style={{
          borderRadius: "0px",
          // backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210623/pngtree-football-geometric-red-solid-image_731457.jpg')`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // backgroundSize: "cover",
        }}
      >
        <div className="container my-5">
          <h4 className="mt-5">Update Score Liga terbaik dunia</h4>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            totam, aliquid beatae hic voluptatum quae provident voluptate cum
            reprehenderit vero mollitia.
          </p>
          {/* <div class="d-flex justify-content-between">
            <div>
              <img
                src="logodefault.png"
                className="img-fluid mt-4"
                alt="Responsive image"
                style={{
                  height: "100px",
                }}
              />

              <p className="text-center mt-2">{score.away_name}</p>
            </div>

            <div>
              <h3
                className="text-center"
                style={{
                  position: "relative",
                  marginTop: "80px",
                  fontWeight: "bold",
                }}
              >
                {score.score}
              </h3>
              <p className="text-center">
                Liga : {score.competition_name} <br />
                {score.location}
              </p>
            </div>
            <div>
              <img
                src="logodefault.png"
                className="img-fluid mt-4"
                alt="Responsive image"
                style={{
                  height: "100px",
                }}
              />

              <p className="text-center mt-2">{score.home_name}</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
