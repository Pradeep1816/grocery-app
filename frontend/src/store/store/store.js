import { configureStore } from "@reduxjs/toolkit";
import selectAddressSlice from "../reducer/selectAddressSlice";
const store = configureStore({
  reducer: {
    selectAddressSlice: selectAddressSlice.reducer,
  },
});
