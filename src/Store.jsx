import { configureStore } from "@reduxjs/toolkit";
import RegisterReducer from "./ReduxSlice/RegisterSlice";
import bannerReducer from "./ReduxSlice/bannerSlice";
import creatorsReducer from "./ReduxSlice/creatorsSlice";
import NotificationReducer from "./ReduxSlice/notificationSlice";
import PaymentReducer from "./ReduxSlice/paymentSlice";
import SigninReducer from "./ReduxSlice/signinSlice";
import unApproveCreatorReducer from "./ReduxSlice/unapproveCreators";

export const Store = configureStore({
  reducer: {
    register: RegisterReducer,
    signIn: SigninReducer,
    creators: creatorsReducer,
    unApproveCreators: unApproveCreatorReducer,
    banners: bannerReducer,
    notification: NotificationReducer,
    payment: PaymentReducer,
  },
});
