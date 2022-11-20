import React from "react";
import Image from "next/image";
import logo from "../../assets/HomePage/Lalasia Logo.svg";
import bag from "../../assets/HomePage/Lalasia Bag.svg";
import user from "../../assets/HomePage/Lalasia User.svg";
import Link from "next/link";
import { ImageConst, RootingConst } from "../../constants/Constants";
import { modalStore } from "../../store/Modal/ModalStore";
import { useRecoilState } from "recoil";
import { EnumTypeModal } from "../../interfaces/ModalTypes";
import { modalActions } from "../../thunk/ModalActions";

const Navbar = () => {
  const handleClick = () => {
    modalActions.SHOW_MODAL({
      isOpen: true,
      name: {
        type: EnumTypeModal.DIALOG_LOGIN,
      },
    });
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-16 py-5">
        <div className="flex flex-row items-center gap-2">
          <Link href={RootingConst.ROOT_HOME}>
            <Image src={logo} alt={ImageConst.LOGO_IMAGE}></Image>
          </Link>
          <h2>Lalasia</h2>
        </div>
        <div className="flex flex-row gap-20">
          <Link href={RootingConst.ROOT_PRODUCT}>
            <p>Product</p>
          </Link>
          <Link href={RootingConst.ROOT_SERVICES}>
            <p>Services</p>
          </Link>
          <Link href={RootingConst.ROOT_ARTICLE}>
            <p>Article</p>
          </Link>
          <Link href={RootingConst.ROOT_ABOUTUS}>
            <p>About us</p>
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <Image src={bag} alt={ImageConst.BAG_IMAGE}></Image>
          <button type="button" onClick={handleClick}>
            <Image src={user} alt={ImageConst.USER_IMAGE}></Image>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
