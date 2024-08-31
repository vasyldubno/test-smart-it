import { UserService } from "@/api/userService/userService";
import { UserType } from "@/shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk<UserType[]>(
  "userSlice/getUsers",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const users = await UserService.getAll();
      return fulfillWithValue(users.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
