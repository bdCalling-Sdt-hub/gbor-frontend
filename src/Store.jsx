import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./ReduxSlice/bannerSlice";
import creatorsReducer from "./ReduxSlice/creatorsSlice";
import donarReducer from "./ReduxSlice/donarSlice";
import notificationReducer from "./ReduxSlice/notificationOnOffSlice";
import NotificationReducer from "./ReduxSlice/notificationSlice";
import PaymentReducer from "./ReduxSlice/paymentSlice";
import registerSlice from "./ReduxSlice/registerSlice";
import SigninReducer from "./ReduxSlice/signinSlice";
import unApproveCreatorReducer from "./ReduxSlice/unapproveCreators";

export const Store = configureStore({
  reducer: {
    register: registerSlice,
    signIn: SigninReducer,
    creators: creatorsReducer,
    unApproveCreators: unApproveCreatorReducer,
    banners: bannerReducer,
    notification: NotificationReducer,
    payment: PaymentReducer,
    donar: donarReducer,
    NotifyOnOff: notificationReducer,
  },
});
