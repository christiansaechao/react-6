import React from "react";
import { CountItems } from "./reducing/CountItems";
import { CountOccurences } from "./reducing/CountOccurences";
import { CartTotal } from "./reducing/CartTotal";

export const App = () => {
  return (
    <div style={{ color: "black", background: "gray" }}>
      <CartTotal />
    </div>
  );
};

export default App;
