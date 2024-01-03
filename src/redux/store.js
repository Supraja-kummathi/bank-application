import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import BankReducer from "./reducers/bank/bankSlice";
import MdReducer from "./reducers/md/mdSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bank: BankReducer,
    md: MdReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
