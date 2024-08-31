import { UserType } from "@/shared/types";
import { Column } from "@tanstack/react-table";
import { FC } from "react";

interface InputSearchProps {
  column: Column<UserType>;
}

export const InputSearch: FC<InputSearchProps> = ({ column }) => {
  const columnFilterValue = column.getFilterValue();

  return (
    <input
      type="text"
      style={{ border: "1px solid black" }}
      value={(columnFilterValue ?? "") as string}
      onChange={(event) => column.setFilterValue(event.target.value)}
    />
  );
};
