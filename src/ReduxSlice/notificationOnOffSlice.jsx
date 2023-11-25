import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifyShow: localStorage.notifyShow || true,
};

const notificationOnOffSlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    notifyOnOff: (state, action) => {
      state.notifyShow = action.payload.value;
      localStorage.setItem("notifyShow", action.payload.value);
    },
  },
});

export const { notifyOnOff } = notificationOnOffSlice.actions;
export default notificationOnOffSlice.reducer;
