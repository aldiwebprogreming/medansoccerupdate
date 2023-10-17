import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadprofil() {
  return (
    <div className="" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"50px"} />
        <Skeleton count={3} height={"60px"} />
      </SkeletonTheme>

      <div className="mt-3">
        {" "}
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} height={"200px"} />
        </SkeletonTheme>
      </div>

      <div className="mt-3">
        {" "}
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} height={"300px"} />
        </SkeletonTheme>
      </div>

      <div className="mt-3 card">
        {" "}
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
        </SkeletonTheme>
      </div>
    </div>
  );
}
