import Link from "next/link";
import logo from "../public/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import fadedLogo from "../public/fadedLogo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-36 px-20 md:px-36 overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-3/4 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <Image src={logo} alt="Zehenify Logo" width={50} height={50} />
            <span className="ml-2 text-3xl text-[#006466] font-semibold">
              Zehenify
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-6">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <nav>
            <ul className="flex flex-wrap">
              {[
                "Home",
                "Feature's",
                "How it Works",
                "Pricing Plans",
                "About",
                "Contact",
                "Assessments",
              ].map((item) => (
                <li key={item} className="mr-8 mb-2">
                  <Link
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#006466]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="text-left">
          <p className="text-sm text-gray-600 mb-2">Enroll Yourself now</p>
          <div className="flex flex-col">
            <button className="bg-[#006466] text-white px-4 py-2 rounded mb-2 w-full ">
              Login
            </button>
            <button className="bg-black text-white px-4 py-2 rounded w-full ml-0  mt-2 md:mt-0">
              Start for free
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-4">Follow us on</p>
          <div className="mt-2 flex justify-end space-x-4">
            <Link href="#" className="text-gray-400 hover:text-[#006466]">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#006466]">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#006466]">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#006466]">
              <Facebook size={20} />
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-2"/>
      <div className="text-center my-4 text-sm text-gray-500">
        © 2024 Zehenify. All rights reserved.
      </div>
      <div className="absolute right-0 top-0 pointer-events-none">
        <Image
          src={fadedLogo}
          alt="Faded Brain Logo"
          objectFit="contain"
        />
      </div>
    </footer>
  );
}
