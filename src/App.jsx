import { useState } from "react";
import { PaystackButton } from "react-paystack";

const App = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const publicKey = "pk_test_6fc625417e2cfa3af5deb2420cc87012b7c49fb4";
  const componentProps = {
    email,
    amount,
    metadata: {
      name: "",
      phone: "",
    },
    publicKey,
    text: "confirm",
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className="container">
      <div className="form">
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <PaystackButton {...componentProps} />
      </div>
    </div>
  );
};

export default App;
