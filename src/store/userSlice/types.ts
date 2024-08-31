import { UserType } from "@/shared/types";

export interface UserState {
  list: UserType[] | null;
  status: StateEnum;
}

export enum StateEnum {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
