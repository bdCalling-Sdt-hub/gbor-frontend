import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  pagination: {},
  data: [],
};

const token = localStorage.token;

export const Comment = createAsyncThunk("Comment", async (value, thunkAPI) => {
  try {
    const response = await axios.get(
      `/api/payment/comments?page=${value.page}&limit=${value.limit}&searchTerm=${value.search}&type=${value.type}`,
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

export const commentSlice = createSlice({
  name: "commentSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: {
    [Comment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [Comment.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.data = action.payload?.data;
      state.pagination = action.payload?.pagination;
    },
    [Comment.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    },
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
