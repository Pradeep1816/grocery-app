import React from "react";
import Brand from "./headerUI/Brand";
import LocationSelector from "./headerUI/LocationSelector";
import SearchHeader from "./headerUI/SearchHeader";
import UserAccount from "./headerUI/UserAccount";
import CartItems from "./headerUI/CartItems";
function Header() {
  return (
    <header className="border sticky top-0 z-20 bg-white md:p-3  h-40 md:h-20 w-full justify-evenly md:gap-5   md:flex grid grid-cols-header items-center">
      <Brand />
      <LocationSelector />
      <SearchHeader />
      <UserAccount />
      <CartItems />
    </header>
  );
}

export default Header;
