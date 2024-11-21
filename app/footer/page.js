import Link from "next/link";
import logo from "../public/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import fadedLogo from "../public/fadedLogo.png";

export default function Footer() {
  return (
    <footer className="relative bg-white pt-4 sm:pt-10 lg:pt-36 px-4 sm:px-8 md:px-8 lg:px-20 xl:px-36 overflow-hidden text-black">
      <div className="container mx-auto flex flex-wrap justify-between items-start relative z-10">
        <div className="w-full lg:w-3/4 lg:mb-0 flex flex-col">
          <div className="flex items-center mb-4 self-start">
            <Image src={logo} alt="Zehenify Logo" width={50} height={50} />
            <span className="ml-2 text-2xl sm:text-3xl text-[#006466] font-semibold">
              Zehenify
            </span>
          </div>
          <p className="text-sm  mb-6">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <hr className="lg:hidden mb-4" />
          <nav className="mb-8">
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
                <li key={item} className="mr-4 sm:mr-8 mb-2">
                  <Link href="#" className="text-sm  hover:text-[#006466]">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="w-full lg:w-1/4 text-left lg:text-right flex justify-center items-center sm:gap-8 gap-8 lg:flex-col lg:gap-0">
          {/* <div className="lg:flex-col sm:flex-row flex-col flex items-center justify-center gap-3 sm:gap-5">
            <p className="text-sm ">Enroll Yourself now</p>
            <div className="flex flex-col sm:flex-col lg:flex-col">
              <button className="bg-[#006466] text-white px-4 py-2 rounded mb-2 w-full sm:w-full lg:w-full">
                Login
              </button>
              <button className="bg-black text-white px-4 py-2 rounded w-full sm:w-full lg:w-full lg:ml-0 sm:mt-0 lg:mt-2">
                Start for free
              </button>
            </div>
          </div> */}
          <div className="lg:flex-col flex sm:flex-row flex-col sm:gap-8 lg:gap-0 gap-5 justify-center items-center text-center">
            <p className="text-sm  lg:mt-4">Follow us on</p>
            <div className="lg:mt-2 flex justify-start lg:justify-end lg:space-x-4 space-x-2">
              <Link href="#" className="hover:text-[#006466]">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-[#006466]">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-[#006466]">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="hover:text-[#006466]">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="lg:my-8 sm:my-4" />
      <div className="text-center my-4 text-sm">
        © 2024 Zehenify. All rights reserved.
      </div>
      <div className="absolute right-0 bottom-0 md:bottom-16 lg:right-4 z-0 w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[400px] pointer-events-none">
        <Image
          src={fadedLogo}
          alt="Faded Brain Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </footer>
  );
}
