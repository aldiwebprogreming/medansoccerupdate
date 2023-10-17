import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadformbooking() {
  return (
    <div className="container my-5">
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <div className="row">
            <div className="col-sm-6">
              {" "}
              <Skeleton count={1} />
            </div>
            <div className="col-sm-6">
              {" "}
              <Skeleton count={1} />
            </div>
          </div>

          <Skeleton count={1} height={"20px"} />
        </SkeletonTheme>
      </div>
    </div>
  );
}
