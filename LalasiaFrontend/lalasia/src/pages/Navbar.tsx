import React from "react";
import Image from "next/image";
import logo from "../../assets/HomePage/Lalasia Logo.svg";
import bag from "../../assets/HomePage/Lalasia Bag.svg";
import user from "../../assets/HomePage/Lalasia User.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-16 py-5">
        <div className="flex flex-row items-center gap-2">
          <Image src={logo} alt="logo"></Image>
          <h2>Lalasia</h2>
        </div>
        <div className="flex flex-row">
          <Link href="/product">
            <p>Product</p>
          </Link>
          <Link href="/services">
            <p>Services</p>
          </Link>
          <Link href="/article">
            <p>Article</p>
          </Link>
          <Link href="/aboutus">
            <p>About us</p>
          </Link>
        </div>
        <div className="flex flex-row">
          <Image src={bag} alt="bag"></Image>
          <Image src={user} alt="user"></Image>
        </div>
      </div>
    </>
  );
};

export default Navbar;
