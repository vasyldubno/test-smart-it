import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { selectStatusUser, selectUsers } from "./store/userSlice/selectors";
import { getUsers } from "./store/userSlice/thunk";
import { StateEnum } from "./store/userSlice/types";
import { UserList } from "./shared/components/UserList/UserList";

export const App = () => {
  const dispatch = useAppDispatch();

  const userStatus = useAppSelector(selectStatusUser);
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      {userStatus === StateEnum.LOADING && <p>LOADING...</p>}
      {userStatus === StateEnum.SUCCESS && users && <UserList data={users} />}
    </>
  );
};
