import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadcardberlangganan() {
  return (
    <div className="card" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"80px"} />
        <Skeleton count={1} height={"20px"} />
        <div className="row">
          <div className="col-sm-6 col-6">
            <Skeleton count={1} height={"80px"} />
          </div>
          <div className="col-sm-6 col-6">
            <Skeleton count={1} height={"80px"} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}
