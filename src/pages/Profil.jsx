import React from "react";
import Navbar from "../componenst/Navbar";
import CompHeader from "../componenst/Profil/CompHeader";
import Compprofil from "../componenst/Profil/Compprofil";

export default function Profil() {
  return (
    <div>
      <Navbar judul="Profil" aicon="false" />
      <CompHeader />
      <Compprofil />
    </div>
  );
}
