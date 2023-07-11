import axios from "axios";
import { site } from "../components/backend"
export const Rozarpayment = async (amount, handlepayment) => {
     try {
          const orderResponse = await axios.post(`${site}/rozar-order`, { amount, currency: 'INR', })
          const order = orderResponse.data;
          const Name = localStorage.getItem("name");
          var options = {
               key: "rzp_test_WnhyES4h7LlY5s",
               amount: amount * 100,
               currency: "INR",
               name: Name,
               description: "Test Transaction",
               order_id: order.id,
               handler: (order) => {
                    axios
                         .post(`${site}/payment-callback`, {
                              order: order
                         })
                         .then((response) => {
                              console.log("Payment success:", response.data);
                              const resData= response.data.data;
                              handlepayment(resData);
                         })
                         .catch((error) => {
                              console.log("Payment error:", error.response.data);
                         });
                         
               },
          };
          var rzp1 = new window.Razorpay(options)
          rzp1.open();
        
     }
     catch (error) {
          console.log("Error creating payment order:", error);
     }
    
}
