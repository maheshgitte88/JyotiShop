import React from "react";
import axios from "axios";
import { site } from "../../components/backend";

const SaveOrderButton = ({ cart, totalPrice, userId }) => {
  let toki = localStorage.getItem("token");

  const handleSaveOrder = async () => {
    try {
      const orderData = {
        cart,
        totalPrice,
        userId,
        date: new Date().toISOString(),
      };
    
      const response = await axios.post(`${site}/admin/post_orders`, orderData);
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleSaveOrder}>Save Order</button>;
};

export default SaveOrderButton;
