import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CartProvider } from './CartContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>

      <ChakraProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
