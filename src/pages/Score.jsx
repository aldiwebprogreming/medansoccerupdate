import React from "react";
import Navbar from "../componenst/Navbar";
import Compheader from "../componenst/Score/Compheader";
import Compmain from "../componenst/Score/Compmain";

export default function Score() {
  return (
    <div>
      <Navbar judul="Update score" aicon="true" />
      <Compheader />
      <Compmain />
    </div>
  );
}
