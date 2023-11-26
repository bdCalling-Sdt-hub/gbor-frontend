import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: true,
  isLoading: false,
  message: "",
  categoryLists: [],
};

export const Category = createAsyncThunk(
  "Category",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get("api/category");

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

export const categorySlice = createSlice({
  name: "categorySlice",
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
    [Category.pending]: (state, action) => {
      state.isLoading = true;
    },
    [Category.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.categoryLists = action.payload.data?.categories;
    },
    [Category.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = categorySlice.actions;
export default categorySlice.reducer;
