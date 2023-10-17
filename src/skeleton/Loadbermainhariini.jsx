import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadbermainhariini() {
  return (
    <div className="container" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"200px"} />
        <Skeleton count={1} height={"20px"} />
        <Skeleton count={5} />
        <Skeleton count={1} height={"50px"} />
      </SkeletonTheme>
    </div>
  );
}
