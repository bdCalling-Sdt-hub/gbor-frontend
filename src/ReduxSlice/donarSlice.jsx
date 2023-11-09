import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  donar: [],
  pagination: {},
};

const token = localStorage.token;
const storedInfo = localStorage.getItem("yourInfo");

export const DonarApi = createAsyncThunk(
  "DonarApi",
  async (value, thunkAPI) => {
    console.log(value);
    try {
      if (storedInfo) {
        const { userInfo } = JSON.parse(storedInfo);
        const response = await axios.get(
          `/api/payment/donor-list/${userInfo._id}?limit=${value.limit}&page=${value.page}&search=${value.search}&gborAmount=${value.gborAmount}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
          }
        );

        return response.data;
      }
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const donarSlice = createSlice({
  name: "donarSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.banners = [];
    },
  },
  extraReducers: {
    [DonarApi.pending]: (state, action) => {
      state.isLoading = true;
    },
    [DonarApi.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.donar = action.payload?.data;
      state.pagination = action.payload?.pagination;
    },
    [DonarApi.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = donarSlice.actions;
export default donarSlice.reducer;
