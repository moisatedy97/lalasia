import { atom } from "recoil";
import { TypeUser } from "../../interfaces/UserTypes";

const user: TypeUser = {
  username: "",
  password: "",
  isLoggedIn: false,
  isTokenValid: false,
};

export const userStore = atom<TypeUser>({
  key: "userStore",
  default: user,
});
