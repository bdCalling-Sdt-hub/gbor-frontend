import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  incomesTotal: {},
  pagination: {},
  incomes: [],
};

const token = localStorage.token;

export const Payment = createAsyncThunk("Payment", async (value, thunkAPI) => {
  try {
    const response = await axios.get(
      `/api/payment?requestType=${value.type}&page=${value.page}&limit=${value.limit}&search=${value.search}&gborAmount=${value.gborAmount}`,
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const paymentSlice = createSlice({
  name: "paymentSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [Payment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [Payment.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.incomesTotal = action.payload?.data?.totals;
      state.incomes = action.payload?.data?.data;
      state.pagination = action.payload.pagination;
    },
    [Payment.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },
});

export const { reset } = paymentSlice.actions;
export default paymentSlice.reducer;
