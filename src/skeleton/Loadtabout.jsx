import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadtabout() {
  return (
    <div className="card mt-4" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"50px"} />
        <Skeleton className="mt-1" count={4} />
        <div className="mt-3">
          <Skeleton className="mt-1" count={5} />
        </div>

        <div className="mt-3">
          <Skeleton className="mt-1" count={5} />
        </div>
      </SkeletonTheme>
    </div>
  );
}
