import React from "react";
import { IoCartOutline } from "react-icons/io5";
function CartItems() {
  return (
    <div
      className="row-start-2 cursor-pointer md:row-start-auto  flex bottom-10 left-2 right-2  fixed md:static  md:w-32 md:h-14  h-20  rounded-md  text-white px-4  items-center bg-green-500   gap-2"
      style={{ backgroundColor: "#8E0F5D" }}
    >
      <div>
        <IoCartOutline style={{ fontSize: "20px" }} />
      </div>
      <p className="block md:hidden">My Cart</p>
    </div>
  );
}

export default CartItems;
