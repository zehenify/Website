"use client";

import React, { useState } from "react";
import Nav from "../nav/page";
import Footer from "../footer/page";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import header from "../../public/contactHeader.svg";

export default function about() {
  return (
    <>
      <Nav />
      <main className="flex-1 overflow-hidden">
        <div className="relative w-screen h-auto">
          <Image
            src={header}
            alt="Contact Header"
            className="w-full h-auto object-cover object-center"
            priority
          />
          <div className="absolute inset-0">
            <div className="container mx-auto px-10 sm:px-20 h-full flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-white/90 text-sm xl:text-xl max-w-md">
                Lorem ipsum dolor sit amet consectetur. Quis nereniti vitae
                ullug uluptat. Sed praesent imperdiet nyt sit.
              </p>
            </div>
          </div>
        </div>
        <div className="py-16 px-4">
          <div className="text-center mb-16">
            <span className="text-sm text-[#006466] p-1 bg-[#E4FFF9] font-medium mb-2 inline-block rounded-xl">
              CONTACT US
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black">
              We'd Love To Hear From You
            </h2>
            <p className="text-black">
              We provide live phone support{" "}
              <span className="font-semibold">24 hours</span> a day,{" "}
              <span className="font-semibold">7 days</span> a week!
            </p>
          </div>

          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-black flex flex-col justify-around gap-6 md:gap-0">
                <div className="flex flex-col gap-6">
                  <div className="flex gap-2">
                    <h3 className="text-6xl font-bold inline">Get In</h3>
                    <h3 className="text-[#006466] text-6xl font-bold inline">
                      Touch
                    </h3>
                  </div>
                  <p className="">
                    Learn more about how we've helped agencies become driven,
                    organized and serve real people in need by connecting to
                    today.
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">Support Hours:</p>
                    <p>MON-FRI 7 AM - 5 PM PST</p>
                  </div>
                </div>
                <hr className="" />
                <div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 ">
                      <Mail className="text-teal-600 bg-[#DDFFDC] p-[0.4rem] rounded-[50%] w-8 h-8" />
                      <span>Support@zehenify.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-teal-600 bg-[#DDFFDC] p-[0.4rem] rounded-[50%] w-8 h-8" />
                      <span>+91 123 456 0789 · +91 123 456 0789</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-teal-600 mt-1 bg-[#DDFFDC] p-[0.4rem] rounded-[50%] w-8 h-8" />
                      <span>
                        Office No. 123, Floor 7th, Magnet Plaza, Malahata &
                        Local XYZ, Pnk
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-black">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium  mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium  mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium  mb-1"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" name="check" id="check" className="bg-[#E4FFF9] text-[#006466]"/>
                    <label
                      htmlFor="check"
                      className="block text-sm font-medium"
                    >
                      You agree to our friendly privacy policy.
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#006466] text-white py-2 px-4 rounded-md hover:bg-[#1a4f50] transition-colors"
                  >
                    Get In Touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
