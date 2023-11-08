import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../Config";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  unApproveCreators: [],
  pagination: {},
};
const token = localStorage.token;

export const UnApproveCreators = createAsyncThunk(
  "UnApproveCreators",
  async (value, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/auth/all-unapproved-user?page=${value.page}&limit=${value.limit}&search=${value.search}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

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

export const unApproveCreatorSlice = createSlice({
  name: "unApproveCreatorSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.userData = [];
      state.pagination = {};
    },
  },
  extraReducers: {
    [UnApproveCreators.pending]: (state, action) => {
      state.isLoading = true;
    },
    [UnApproveCreators.fulfilled]: (state, action) => {
      state.isError = false;
      state.isSuccess = true;
      state.isLoading = false;
      state.unApproveCreators = action.payload.data?.all_unapproved_user;
      state.pagination = action.payload.pagination;
    },
    [UnApproveCreators.rejected]: (state, action) => {
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});

export const { reset } = unApproveCreatorSlice.actions;
export default unApproveCreatorSlice.reducer;
