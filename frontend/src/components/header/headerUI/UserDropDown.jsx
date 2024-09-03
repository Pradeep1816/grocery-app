import React from "react";
import { NavLink } from "react-router-dom";

function UserDropDown({ setDropDown }) {
  return (
    <div
      className="fixed hidden md:flex inset-0 top-10 bg-stone-900/50 mt-10 text-left"
      onClick={() => setDropDown(false)}
    >
      <div className="absolute top-0 flex  flex-col shadow-2xl px-2 py-5 gap-4 rounded-sm right-0  w-60 bg-white">
        <div className="text-gray-900 px-4">
          <h1>My Account</h1>
          <h1 className="text-sm">9999999999</h1>
        </div>
        <ul className="py-2 text-sm flex flex-col gap-5">
          <li>
            <NavLink
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 hover:text-gray-500"
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 hover:text-gray-500"
            >
              Save Address
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 hover:text-gray-500"
            >
              <div className="flex justify-between">
                My Wallet
                <h1>0</h1>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 hover:text-gray-500"
            >
              FAQ's
            </NavLink>
          </li>
          <li>
            <NavLink
              href="#"
              className="block px-4 py-1 hover:bg-gray-100 hover:text-gray-500"
            >
              AccountPrivacy
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDropDown;
