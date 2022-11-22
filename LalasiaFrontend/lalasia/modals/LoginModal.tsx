import React from "react";
import logo from "../assets/HomePage/Lalasia Logo.svg";
import Image from "next/image";
import { ImageConst } from "../constants/Constants";
import { modalActions } from "../thunk/ModalActions";
import axios, { AxiosError } from "axios";
import { useRecoilState } from "recoil";
import { userStore } from "../store/User/UserStore";
import { TypeUser } from "../interfaces/UserTypes";

const LoginModal = () => {
  const [user, setUser] = useRecoilState<TypeUser>(userStore);

  const handleClick = () => {
    axios
      .post("http://localhost:5000/lalasia/create", {
        username: user.username,
        password: user.password,
      })
      .then((response) => console.log(response))
      .catch((error: AxiosError) => console.log(error));

    modalActions.HIDE_MODAL();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex w-1/4 flex-col items-center justify-start gap-4 rounded-xl bg-white p-24 shadow-xl">
            <Image
              src={logo}
              alt={ImageConst.LOGO_IMAGE}
              className="w-14"
            ></Image>
            <input
              type="text"
              className="login-input"
              placeholder="Username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, username: event.target.value })
              }
            />
            <input
              type="text"
              className="login-input"
              placeholder="Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setUser({ ...user, password: event.target.value })
              }
            />
            <button
              className="h-10 w-full rounded bg-lalasia-primary text-xl font-semibold shadow-md"
              onClick={handleClick}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
