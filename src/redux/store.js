import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import BankReducer from "./reducers/bank/bankSlice";
import MdReducer from "./reducers/md/mdSlice";
import BranchReducer from "./reducers/branch/branchSlice";
import BranchManagerReducer from "./reducers/branchmanager/branchManagerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    bank: BankReducer,
    md: MdReducer,
    branch: BranchReducer,
    branchManager: BranchManagerReducer,

  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
