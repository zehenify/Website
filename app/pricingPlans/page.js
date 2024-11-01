"use client";

import React, { useState } from "react";
import Nav from "../nav/page";
import Image from "next/image";
import Footer from "../footer/page";
import header from "../../public/PricingHeader.svg";

export default function pricingPlans() {
  const packages = [
    {
      name: "Starter",
      price: "1,050",
      description: "Begin with the basics for your private practice",
      featureHeading: "Starter features",
      features: [
        "24/7 tech stack",
        "Client Portal",
        "Progress notes",
        "Treatment plan",
        "Integrated measurement-based care",
        "Automated invoicing and billing",
        "Real-time scheduling",
        "Live customer support",
        "Telehealth",
      ],
    },
    {
      name: "Essential",
      price: "2,200",
      description: "Begin with the basics for your private practice",
      featureHeading: "Everything in starter, plus",
      features: [
        "Everything in Starter, plus:",
        "Client Portal",
        "Progress notes",
        "Treatment plan",
        "Integrated measurement-based care",
        "Automated invoicing and billing",
        "Real-time scheduling",
        "Live customer support",
        "Telehealth",
      ],
    },
    {
      name: "Pro",
      price: "4,250",
      description: "Begin with the basics for your private practice",
      featureHeading: "Everything in essential, plus",
      features: [
        "Everything in Essential, plus:",
        "Client Portal",
        "Progress notes",
        "Treatment plan",
        "Integrated measurement-based care",
        "Automated invoicing and billing",
        "Real-time scheduling",
        "Live customer support",
        "Telehealth",
      ],
    },
  ];
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                Pricing & Packages
              </h1>
              <p className="text-white/90 text-sm xl:text-xl max-w-xl">
                Lorem ipsum dolor sit amet consectetur. Quis nereniti vitae
                ullug uluptat. Sed praesent imperdiet nyt sit.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto max-w-7xl text-black">
          <div className="text-center mb-12">
            <h2 className="text-md text-[#006466] font-bold mb-4 bg-[#E4FFF9] inline-block px-3 rounded-lg py-1">
              Pricing Plans
            </h2>
            <h2 className="md:text-5xl text-3xl font-bold mb-4">
              Pricing & Packages
            </h2>
            <p className=" max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur. Elementum pulvinar
              facilisis lectus viverra tellus aliquam. Nibh nibap ut maecenas
              dolor vitae dolor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className={`shadow-xl rounded-lg p-6 flex flex-col border-t-8 ${
                  pkg.name === "Starter"
                    ? "border-[#006466]"
                    : pkg.name === "Essential"
                    ? "border-[#FF494F]"
                    : pkg.name === "Pro"
                    ? "border-[#938CFF]"
                    : ""
                }`}
              >
                <div className="mb-8">
                  <h3 className="text-md font-semibold mb-2 px-3 rounded-lg py-1 text-[#006466] inline-block bg-[#E4FFF9]">
                    {pkg.name}
                  </h3>
                  <p className=" mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg text-[#006466]">PKR</span>
                    <span className="text-4xl text-[#006466] font-bold">
                      {pkg.price}
                    </span>
                    <span className="text-lg">/per user</span>
                  </div>
                </div>

                <button className="border border-[#006466] hover:bg-[#006466] hover:text-white text-[#006466] rounded py-2 px-4 mb-8 transition-colors">
                  Get Started
                </button>

                <div>
                  <p className="font-semibold text-xl mb-4">
                    {pkg.featureHeading}
                  </p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-white bg-[#006466] mt-0.5 rounded-[50%]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}