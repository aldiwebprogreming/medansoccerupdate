import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadgambar() {
  return (
    <div className="container">
      <div className="compslide" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"200px"} />
        </SkeletonTheme>
      </div>
    </div>
  );
}
