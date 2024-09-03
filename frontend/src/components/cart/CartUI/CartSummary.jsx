import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { GiScooter } from "react-icons/gi";
import { GiShoppingBag } from "react-icons/gi";
import { RiContactsBook3Fill } from "react-icons/ri";
import DeliveryChargePopup from "../InfoPopup/DeliveryChargePopup";
import HandleChargePopup from "../InfoPopup/HandleChargePopup";
import {
  handleChargeShow,
  deliverChargeShow,
} from "../../../store/reducer/cartSlice";
import { useDispatch } from "react-redux";

function CartSummary() {
  const { tipsAmount, handleChargePopup, deliverChargePopup } = useSelector(
    (state) => state.cartSlice
  );

  const dispatch = useDispatch();

  // TOGGLE FOR POPUP
  const toggleDeliveryPopup = () => {
    dispatch(deliverChargeShow());
  };
  const toggleHandlePopup = () => {
    dispatch(handleChargeShow());
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <div className="p-3">
          <h1 className="font-semibold text-[12px] mb-3">Billing Details</h1>
          <div className="flex items-center  justify-between text-xs">
            <div className="left-side flex flex-col gap-1 w-full">
              <div className="flex items-center justify-between gap-4 w-full">
                <div className="flex items-center gap-1">
                  <RiContactsBook3Fill className="text-[15px]  font-extrabold" />
                  <span>Items Total</span>
                </div>
                <div>
                  <span>₹40</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-1">
                  {/* <img src="/images/app/cart/deliverycharges_icon.png" /> */}
                  <GiScooter className="text-[15px]  font-extrabold" />
                  <p>Delivery Charges</p>
                  <BsInfoCircle
                    className="cursor-pointer"
                    onClick={toggleDeliveryPopup}
                  />
                </div>
                <div>
                  <span>₹20</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <h1 className="flex items-center gap-1">
                  {/* <img src="/images/app/cart/handling_icon.png" /> */}
                  <GiShoppingBag className="text-[15px]" />
                  <p>Handling Charges</p>
                  <BsInfoCircle
                    className="cursor-pointer"
                    onClick={toggleHandlePopup}
                  />
                </h1>
                <h1>₹5</h1>
              </div>
              {tipsAmount > 0 && (
                <div className="flex items-center justify-between gap-4">
                  <h1 className="flex items-center gap-1">
                    <FaUser className="text-[15px]" />
                    <p>Tip for your delivery partner</p>
                  </h1>
                  <h1>₹{tipsAmount}</h1>
                </div>
              )}
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex items-center justify-between font-semibold">
            <h1 className="font-semibold text-[12px]">Grand Total</h1>
            <h1>₹65</h1>
          </div>
        </div>
        <div className="offer bg-custom-purple text-center py-5 rounded-b-xl">
          <p className="text-white text-[10px]">
            Shop for ₹40 more to save ₹20 on your delivery charge
          </p>
        </div>
      </div>
      {deliverChargePopup && <DeliveryChargePopup />}
      {handleChargePopup && <HandleChargePopup />}
    </>
  );
}

export default CartSummary;
