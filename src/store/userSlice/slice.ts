import { createSlice } from "@reduxjs/toolkit";
import { StateEnum, UserState } from "./types";
import { getUsers } from "./thunk";

const initialState: UserState = { list: null, status: StateEnum.IDLE };

const slice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = StateEnum.LOADING;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = StateEnum.SUCCESS;
        state.list = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = StateEnum.ERROR;
      });
  },
  selectors: {
    selectUsers: (state) => state.list,
  },
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;
export const userSelectors = slice.selectors;
