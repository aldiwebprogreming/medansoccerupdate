import axios from "axios";

export default function Pay() {
  const pay = async () => {
    try {
      const response = await axios.get(
        "http://localhost/backmedansoccers/api/pay"
      );
      console.log(response.data);
      const token = response.data.token;
      window.snap.pay(token, {
        onSuccess: function (result) {
          console.log(result.status_message);
          console.log(result);
        },
        onPending: function (result) {
          console.log(result.status_message);
        },
        onError: function (result) {
          console.log(result.status_message);
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button className="bnt btn-primary" onClick={pay}>
        Pay
      </button>
    </div>
  );
}
