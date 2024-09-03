import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import UserDropDown from "./UserDropDown";
function UserAccount() {
  //const [auth, setAuth] = useState(false);

  const auth = false;
  const [dropwdown, setDropDown] = useState(false);
  return (
    <div className="select-one relative col-start-5 row-start-1 md:row-auto md:col-auto flex justity-center items-center h-full gap-2 md:px-4 text-xl">
      {auth ? (
        <>
          <div
            className="flex items-center gap-2 hidden md:flex cursor-pointer"
            onClick={() => setDropDown(dropwdown ? false : true)}
          >
            <p>Account</p>
            {dropwdown ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          </div>
          <FaUserCircle className="md:hidden" />
        </>
      ) : (
        <button className="border border-pink-800 text-pink-800 px-4 py-2 rounded-lg">
          Login
        </button>
      )}

      {dropwdown && <UserDropDown setDropDown={setDropDown} />}
    </div>
  );
}

export default UserAccount;
