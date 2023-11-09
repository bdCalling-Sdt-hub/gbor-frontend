import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  userData: {},
  token: "",
};

export const SignIn = createAsyncThunk("SignIn", async (value, thunkAPI) => {
  try {
    const response = await axios.post("api/auth/login", value);

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.userData = {};
      state.token = "";
    },
  },
  extraReducers: {
    [SignIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [SignIn.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.token = action.payload.token;
      state.userData = action.payload.data;
    },
    [SignIn.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = signinSlice.actions;
export default signinSlice.reducer;
