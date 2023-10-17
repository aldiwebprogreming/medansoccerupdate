import React from "react";
import Navbar from "../componenst/Navbar";
import Compheader from "../componenst/Statistik/Compheader";
import Compmain from "../componenst/Statistik/Compmain";
export default function Statistik() {
  return (
    <div>
      <Navbar judul="Statistik" aicon="true" />
      <Compheader />
      <Compmain />
    </div>
  );
}
