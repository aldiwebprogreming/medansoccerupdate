import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadjambooking() {
  return (
    <div className="container my-5">
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} height={"50px"} />
          <Skeleton count={1} />
          <Skeleton count={1} height={"60px"} />
        </SkeletonTheme>
      </div>
    </div>
  );
}
