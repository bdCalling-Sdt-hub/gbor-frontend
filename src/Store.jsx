import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "./ReduxSlice/RegisterSlice";
import creatorsReducer from "./ReduxSlice/creatorsSlice";
import SigninReducer from "./ReduxSlice/signinSlice";

export const Store = configureStore({
  reducer: {
    register: RegisterReducer,
    signIn: SigninReducer,
    creators: creatorsReducer,
  },
});
