import Navbar from "../componenst/Navbar";
import Compheader from "../componenst/Jadwalmember/Compheader";
import Compmain from "../componenst/Jadwalmember/Compmain";

export default function Jadwalmember() {
  return (
    <div>
      <Navbar judul="Member karir" aicon="true" />
      <Compheader />
      <Compmain />
    </div>
  );
}
