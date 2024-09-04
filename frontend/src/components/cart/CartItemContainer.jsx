import React from "react";
import CartItem from "./CartUI/CartItem";
import { useSelector } from "react-redux";

function CartItemContainer() {
  return (
    <div className="w-full rounded-lg flex flex-col gap-2 bg-white p-2">
      <div>items</div>
    </div>
  );
}

export default CartItemContainer;
