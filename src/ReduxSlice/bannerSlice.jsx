import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  banners: [],
};

const token = localStorage.token;

export const BannerApi = createAsyncThunk(
  "BannerApi",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get("api/banner", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      return response.data;
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

export const bannerSlice = createSlice({
  name: "bannerSlice",
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
    [BannerApi.pending]: (state, action) => {
      state.isLoading = true;
    },
    [BannerApi.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.banners = action.payload?.data["Banners data"];
    },
    [BannerApi.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = bannerSlice.actions;
export default bannerSlice.reducer;
