import React from "react";
import Compabout from "../componenst/About/Compabout";
import Navbar from "../componenst/Navbar";
// import Header from "../componenst/Header";
import CompHeader from "../componenst/About/CompHeader";

export default function About() {
  return (
    <div>
      <Navbar judul="About" aicon="true" />
      <CompHeader />
      <Compabout />
    </div>
  );
}
