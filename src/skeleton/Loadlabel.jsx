import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadlabel() {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ border: "none" }}>
        <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
          <Skeleton count={1} />
        </SkeletonTheme>
      </div>
    </div>
  );
}
