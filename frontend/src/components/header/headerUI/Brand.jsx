import React from "react";
import { NavLink } from "react-router-dom";

function Brand() {
  return (
    <NavLink to="/">
      <div
        className="hidden md:flex w-40 h-full justify-center items-center px-5"
        style={{ color: "#8E0F5D" }}
      >
        <div>
          <h2 className="text-3xl font-bold text-right ">InstantKart</h2>
          <h2 className="text-[10px] font-bold -mt-2 text-right">
            Faster Delivery
          </h2>
        </div>
      </div>
    </NavLink>
  );
}

export default Brand;
