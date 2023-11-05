import React from "react";
import Link from "next/link";
import Logo from "../assets/logo.png";
import IMG from "../assets/menu.png";
import Image from "next/image";

type Props = {};


const Navbar = (props: Props) => {
  return (
    <nav className="bg-primary py-3 px-4 sm:py-4 sm:px-8">
      <div className="flex justify-between items-center">
        <Image src={Logo} alt="Logo" width={120} quality={100} />

        <div className="hidden md:flex text-light space-x-12 list">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Payments</Link>
          <Link href="/">Carrer</Link>
          <Link href="/">Join Us</Link>
        </div>

        <button className=" md:hidden">
          <Image className="w-[20px]" src={IMG} alt="Logo" width={120} quality={100} />
        </button>
        {

        }
      </div>
    </nav>
  );
};

export default Navbar;
