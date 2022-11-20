import React from "react";
import logo from "../assets/HomePage/Lalasia Logo.svg";
import Image from "next/image";
import { ImageConst } from "../constants/Constants";
import { modalActions } from "../thunk/ModalActions";

const LoginModal = () => {
  const handleClick = () => {
    modalActions.HIDE_MODAL();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="flex flex-col justify-start items-center gap-4 w-1/4 p-24 bg-white rounded-xl shadow-xl">
            <Image
              src={logo}
              alt={ImageConst.LOGO_IMAGE}
              className="w-14"
            ></Image>
            <input type="text" className="login-input" placeholder="Username" />
            <input type="text" className="login-input" placeholder="Password" />
            <button
              className="h-10 bg-lalasia-primary w-full rounded text-xl font-semibold shadow-md"
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
