import axios from "axios";
import React from "react";

export default function Sendwa() {
  const kirim = async () => {
    try {
      const response = await axios.get(
        "https://wa.srv15.wapanels.com/send-message?api_key=ewxC3qmrKlPuipxvBMkopVWaWS6zGH&sender=083138184143&number=083138184143&message=Hello"
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button onClick={() => kirim()}>Send wa</button>
    </div>
  );
}
