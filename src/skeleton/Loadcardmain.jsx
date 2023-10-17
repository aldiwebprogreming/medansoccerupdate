import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadcardmain() {
  return (
    <div className="mt-3" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"20px"} />
        <Skeleton count={1} height={"50px"} />
        <Skeleton count={1} />
      </SkeletonTheme>
    </div>
  );
}
