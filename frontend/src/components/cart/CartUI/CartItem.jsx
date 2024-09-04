import React, { useState } from "react";
import { useDispatch } from "react-redux";

function CartItem({ name, id, imageUrl, price, quantity, stock }) {
  const dispatch = useDispatch();

  return (
    <div className="relative bg-white rounded-lg flex items-center justify-between mx-3 px-1 my-2">
      {/* To show outofstock */}
      <div className="flex items-center gap-2">
        <div className="border flex justify-center rounded-lg bg-white w-[90px] flex-shrink-0">
          <img
            src={imageUrl || "/images/dummy_img.png"}
            alt={name}
            className="w-fit h-fit"
          />
        </div>
        <div className="flex flex-col text-[12px] text-wrap text-gray-600 px-1">
          <p>{name}</p>
          <div>
            <p>{quantity}</p>
            <p className="font-bold mt-2 text-[11px]">
              {price * quantity || "null"}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-custom-purple flex items-center justify-evenly text-white text-sm py-1 px-2 rounded-lg">
        <button className="w-5" onClick={onClickDecrease}>
          -
        </button>
        <span className="w-5 text-center">{quantity}</span>
        <button className="w-5" onClick={onClickIncrease}>
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
