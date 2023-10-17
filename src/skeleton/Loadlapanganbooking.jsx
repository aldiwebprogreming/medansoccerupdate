import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadlapanganbooking() {
  return (
    <div className="card mt-4" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <div className="row">
          <div className="col-sm-4 col-4">
            <Skeleton count={1} height={"140px"} />
          </div>
          <div className="col-sm-8 col-8">
            <Skeleton className="mt-1" count={6} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}
