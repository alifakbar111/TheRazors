import type { AxiosResponse } from "axios";
import { setStorageUser, setUser } from "../stores/user";

function setupUser(response: AxiosResponse<any>) {
  const { jwt } = response.data;
  const { username } = response.data.user;
  const user = { username, jwt };
  setStorageUser(user);
  setUser(user);
}

export default setupUser;