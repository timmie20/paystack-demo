import { useEffect } from "react";

const Products = () => {
  const options = {
    port: 443,
    method: "GET",
    headers: {
      Authorization: "sk_test_a8f564fa428906bb41904a3157683e3c72197ad0",
    },
  };

  useEffect(() => {
    fetch("https://api.paystack.co/product/:id//", options)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  // curl "$url" -H "$authorization" -X GET
  return <div></div>;
};

export default Products;
