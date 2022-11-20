import { atom } from "recoil";
import { TypeUser, TypeUserStatus } from "../../interfaces/UserTypes";

const user: TypeUser = {
  username: "",
  password: "",
  status: {
    isLoggedIn: false,
    isTokenValid: true,
  },
};

export const userStore = atom<TypeUser>({
  key: "userStore",
  default: user,
});
