import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadketerangan() {
  return (
    <div className="container">
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={3} />
        </SkeletonTheme>
      </div>

      <div className="card mt-3" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} height={50} />
          <Skeleton count={1} height={50} />
        </SkeletonTheme>
      </div>

      <div className="card mt-3" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} />
          <Skeleton count={1} height={50} />
        </SkeletonTheme>
      </div>

      <div className="card mt-3" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"20px"} />
          <Skeleton count={5} />
        </SkeletonTheme>
      </div>

      <div className="card mt-3" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"20px"} />
          <Skeleton count={1} />
        </SkeletonTheme>
      </div>
    </div>
  );
}
