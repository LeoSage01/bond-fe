import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import IMG1 from "../assets/insta.png";
import IMG2 from "../assets/twitter.png";
import IMG3 from "../assets/lnkdln.png";
import IMG4 from "../assets/fb.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-10">
      <Image src={Logo} alt="Logo" width={140} quality={100} />

      <div className="text-light flex justify-between my-4">
        <div className="">
          <h4 className="">Company</h4>
          <div className="flex flex-col items-start small mt-3 space-y-1">
            <Link className="text-light" href="/">
              Privacy Policy
            </Link>
            <Link className="text-light" href="/">
              About Us
            </Link>
            <Link className="text-light" href="/">
              Blog
            </Link>
          </div>
          <div className="flex mt-8 sm:mt-4 items-end md:items-center space-x-4">
            <Image className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" src={IMG1} alt="Logo"  quality={100} />
            <Image className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" src={IMG2} alt="Logo" quality={100} />
            <Image className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" src={IMG3} alt="Logo" quality={100} />
            <Image className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]" src={IMG4} alt="Logo" quality={100} />
          </div>
        </div>

        <div className="hidden sm:block">
          <h4 className="text-center font-semibold">Contact</h4>
          <div className="flex flex-col items-center small mt-3 space-y-1">
            <Link className="text-light" href="/">
              Lagos State, Nigeria
            </Link>
            <Link className="text-light" href="/">
              +2349029422111
            </Link>
            <Link className="text-light" href="/">
              (Whatsapp only)
            </Link>
          </div>
        </div>

        <div className="hidden sm:block">
          <h4 className="text-center">Get Started</h4>
          <div className="flex flex-col items-end small mt-3 space-y-1">
            <Link className="text-light" href="/">
              Sign Up
            </Link>
            <Link className="text-light" href="/">
              Log In
            </Link>
          </div>
        </div>

      {/* small screen  */}
      <div className=" sm:hidden">
        <div className="">
          <h4 className="text-end font-semibold">Contact</h4>
          <div className="flex flex-col items-end small mt-3 space-y-1">
            <Link className="text-light" href="/">
              Lagos State, Nigeria
            </Link>
            <Link className="text-light" href="/">
              +2349029422111
            </Link>
            <Link className="text-light" href="/">
              (Whatsapp only)
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-end">Get Started</h4>
          <div className="flex flex-col items-end small mt-3 space-y-1">
            <Link className="text-light" href="/">
              Sign Up
            </Link>
            <Link className="text-light" href="/">
              Log In
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
