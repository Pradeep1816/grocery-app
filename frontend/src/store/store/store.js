import { configureStore } from "@reduxjs/toolkit";
import selectAddressSlice from "../reducer/selectAddressSlice";
import cartSlice from "../reducer/cartSlice";
const store = configureStore({
  reducer: {
    selectAddressSlice: selectAddressSlice.reducer,
    cartSlice: cartSlice.reducer,
  },
});

export default store;
