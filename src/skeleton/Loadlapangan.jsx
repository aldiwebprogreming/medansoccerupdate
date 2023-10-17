import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadlapangan() {
  return (
    <div className="card mt-4" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"150px"} />
        <Skeleton count={1} height={"30px"} />
        <Skeleton className="mt-2" count={3} />
      </SkeletonTheme>
    </div>
  );
}
