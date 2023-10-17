import React from "react";
import Navbar from "../componenst/Navbar";
import Compheader from "../componenst/Listbooking/compheader";
import Complist from "../componenst/Listbooking/Complist";

export default function Listbookingkarir() {
  return (
    <div>
      <Navbar judul="List booking main" aicon="true" />
      <Compheader />
      <Complist />
    </div>
  );
}
