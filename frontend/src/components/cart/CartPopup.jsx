import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartSummary from "./CartUI/CartSummary";
import CartItemContainer from "./CartItemContainer";
import { IoIosClose } from "react-icons/io";
import { setCartPopupShow, setHidePopup } from "../../store/reducer/cartSlice";
function CartPopup() {
  const { cartPopup } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [cartItems, setCartItems] = useState(true);

  return (
    <div className="fixed inset-0 bg-stone-900/50 flex justify-end">
      <div className="flex flex-col w-full md:w-[380px] h-full bg-white ">
        <div className="flex items-center justify-between  h-[70px] flex-shrink-0 flex-grow-0  px-3">
          <p className="flex items-center gap-1">
            <span className="font-semibold text-[20px]">My Cart</span>
          </p>
          <IoIosClose
            style={{ fontSize: "35px" }}
            onClick={() => dispatch(setHidePopup())}
          />
        </div>
        {cartItems ? (
          <>
            <div className="cart_body flex flex-col flex-grow-1 gap-5 px-5 py-5 bg-[#EDF0F4] overflow-y-scroll h-full">
              <div className="cart_items_container flex flex-col items-center flex-shrink-0">
                {/* Cart items */}

                <CartItemContainer />
              </div>
              <CartSummary />
              {/* tips section */}
              <div className="cancellation_policy max-h-[181px] bg-white rounded-2xl flex-shrink-0 py-5 px-8">
                <h1 className="font-semibold mb-2">Cancellation Policy</h1>
                <p className="text-sm tracking-wide">
                  Orders cannot be cancelled once packed for delivery. In case
                  of unexpected delays, a refund will be provided, if
                  applicable.
                </p>
              </div>
            </div>
            <div className="cart_footer bg-white mt-auto flex justify-center items-center py-5">
              <button className="pay_btn bg-custom-purple text-white rounded-2xl w-11/12 py-2">
                <p className="text-lg font-semibold -mb-1">Proceed To Pay</p>
                <p className="text-sm">₹65 (Total)</p>
              </button>
            </div>
          </>
        ) : (
          <div>Empty cart</div>
        )}
      </div>
      {/* {newAddressPopup && <AddressContainer />} */}
    </div>
  );
}

export default CartPopup;
