import React from "react";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loadcardteam() {
  return (
    <div className="mt-3" style={{ border: "none" }}>
      <SkeletonTheme baseColor="#e1e1e1" highlightColor="#c0c0c0">
        <Skeleton count={1} height={"100px"} />
        <Skeleton count={1} height={"10px"} />
      </SkeletonTheme>
    </div>
  );
}
