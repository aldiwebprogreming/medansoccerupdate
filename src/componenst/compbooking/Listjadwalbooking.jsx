import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Listjadwalbooking({ idlapangan }) {
  const [booking, setBooking] = useState([]);
  const urlapi = process.env.REACT_APP_BASE_URL;

  const getDataBooking = async () => {
    try {
      const response = await axios.get(urlapi + "booking?id=" + idlapangan);

      // console.log(idlapangan);
      setBooking(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataBooking();
  }, []);

  return (
    <div className="container mb-5">
      <div className="card shadow">
        <div className="card-body">
          <Link
            to={"/formbooking/" + idlapangan}
            className="btn mt-3 w-100 rounded-pill"
            style={{ backgroundColor: "#2b2e5a", color: "white" }}
          >
            Pilih jam booking anda
          </Link>
        </div>
      </div>
    </div>
  );
}
