import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "../../assets/HomePage/Lalasia Logo.svg";
import { ImageConst, RootingConst } from "../../constants/Constants";

const Login = () => {
  return (
    <>
      {/* <div classNameName="w-full h-screen">
        <div classNameName="flex flex-1 flex-col justify-start items-center mt-60 gap-4">
          <Image
            src={logo}
            alt={ImageConst.LOGO_IMAGE}
            classNameNameName="w-14"
          ></Image>
          <input type="text" classNameName="login-input" placeholder="Username" />
          <input type="text" classNameName="login-input" placeholder="Password" />
          <button classNameName="h-10 bg-lalasia-primary w-3/12 rounded text-xl font-semibold">
            Log In
          </button>
        </div>
      </div> */}
    </>
  );
};

export default Login;
