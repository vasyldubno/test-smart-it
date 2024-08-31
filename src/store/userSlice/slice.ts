import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunk";
import { StateEnum, UserState } from "./types";

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
    selectStatusUser: (state) => state.status,
  },
});

export const userReducer = slice.reducer;
export const userActions = slice.actions;
export const userSelectors = slice.selectors;
