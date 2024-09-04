import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartPopup: false,
  tipsAmount: 0,
  isCustom: false,
  handleChargePopup: false,
  deliverChargePopup: false,
};
const cartSlice = createSlice({
  name: "Cart Slice",
  initialState: initialState,
  reducers: {
    setCartPopupShow: (state) => {
      state.cartPopup = true;
    },
    setHidePopup: (state) => {
      state.cartPopup = false;
    },
    setTipsAmount: (state, action) => {
      state.tipsAmount = action.payload;
    },
    removeTipsAmount: (state) => {
      state.tipsAmount = 0;
    },
    showCustom: (state) => {
      state.isCustom = true;
    },
    handleChargeShow: (state) => {
      state.handleChargePopup = true;
    },
    deliverChargeShow: (state) => {
      state.deliverChargePopup = true;
    },
    hideInfoPopup: (state) => {
      state.deliverChargePopup = false;
      state.handleChargePopup = false;
    },

    hideCustom: (state) => {
      state.isCustom = false;
    },
  },
});

export default cartSlice;
export const {
  setCartPopupShow,
  setHidePopup,
  hideCustom,
  hideInfoPopup,
  deliverChargeShow,
  handleChargeShow,
  showCustom,
  setTipsAmount,
  removeTipsAmount,
} = cartSlice.actions;
