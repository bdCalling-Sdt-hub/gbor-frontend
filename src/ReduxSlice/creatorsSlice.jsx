import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  creatorsData: [],
};

export const ContentCreators = createAsyncThunk(
  "ContentCreators",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get("api/auth/content-creator");

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

export const creatorsSlice = createSlice({
  name: "creators",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.creatorsData = [];
    },
  },
  extraReducers: {
    [ContentCreators.pending]: (state, action) => {
      state.isLoading = true;
    },
    [ContentCreators.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.creatorsData = action.payload.data.all_creator;
    },
    [ContentCreators.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = creatorsSlice.actions;
export default creatorsSlice.reducer;
