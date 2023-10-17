import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadstatistik() {
  return (
    <div className="card" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <div className="row">
          <div className="cols-m-4 col-4">
            <Skeleton count={1} height={"20px"} />
          </div>
          <div className="cols-m-4 col-4">
            <Skeleton count={1} height={"20px"} />
          </div>
          <div className="cols-m-4 col-4">
            <Skeleton count={1} height={"20px"} />
          </div>
        </div>
        <Skeleton count={1} height={"50px"} />
        <Skeleton count={1} height={"100px"} />
        <div className="row mt-5">
          <div className="cols-m-3 col-3">
            <Skeleton count={1} height={"20px"} />
          </div>
          <div className="cols-m-3 col-3">
            <Skeleton count={1} height={"20px"} />
          </div>
          <div className="cols-m-3 col-3">
            <Skeleton count={1} height={"20px"} />
          </div>
          <div className="cols-m-3 col-3">
            <Skeleton count={1} height={"20px"} />
          </div>
        </div>
        <Skeleton count={10} height={"20px"} />

        <Skeleton count={1} height={"50px"} />
      </SkeletonTheme>
    </div>
  );
}
