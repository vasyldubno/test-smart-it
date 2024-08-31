import { UserType } from "@/shared/types";
import axios from "axios";

export class UserService {
  static async getAll() {
    const response = await axios.get<UserType[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    return response;
  }
}
