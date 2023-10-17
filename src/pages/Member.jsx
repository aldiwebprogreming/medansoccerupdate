import React from "react";
import Navbar from "../componenst/Navbar";
import CompHeader from "../componenst/Member/Compheader";
import Compmember from "../componenst/Member/Compmember";

export default function Member() {
  return (
    <div>
      <Navbar judul="Member karir" aicon="true" />
      <CompHeader />
      <Compmember />
    </div>
  );
}
