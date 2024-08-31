import { RootState } from "..";
import { userSelectors } from "./slice";

export const selectUsers = (state: RootState) =>
  userSelectors.selectUsers({ userSlice: state.user });

export const selectStatusUser = (state: RootState) =>
  userSelectors.selectStatusUser({ userSlice: state.user });
