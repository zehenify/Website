"use client";

import React from "react";
import Image from "next/image";
import Nav from "../nav/page";
import header from "../../public/aboutHeader.svg";
import mountain from "../../public/mountain.svg";
import line from "../../public/aboveMount.svg";
import teamBg from "../../public/teamBackground.svg";
import waqar from "../../public/waqar.svg";
import alqama from "../../public/alqama.svg";
import khubaibullah from "../../public/khubaibullah.svg";
import afifa from "../../public/afifa.svg";
import people from "../../public/people.svg";
import Footer from "../footer/page";

export default function about() {
  const team = [
    {
      name: "Waqar Ali",
      role: "Technical Lead",
      image: waqar,
    },
    {
      name: "Alqama Rao",
      role: "Co-founder & Tech Manager",
      image: alqama,
    },
    {
      name: "Khubaibullah",
      role: "Co-founder & Tech Manager",
      image: khubaibullah,
    },
    {
      name: "Afifa Rao",
      role: "Clinical Consultant",
      image: afifa,
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                About Zehenify
              </h1>
              <p className="text-white/90 text-sm xl:text-lg max-w-lg">
                Lorem ipsum dolor sit amet consectetur. Quis nereniti vitae
                ullug uluptat. Sed praesent imperdiet nyt sit.
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full">
        <div className="py-8 lg:py-16 text-center">
          <h2 className="text-md text-[#006466] font-bold mb-4 bg-[#E4FFF9] inline-block px-3 rounded-lg py-1">
            About Us
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Together, We're Here To Make A Difference
          </h1>
        </div>

        <div className="bg-teal-800 text-white py-10 relative overflow-hidden">
          <Image
            src={mountain}
            alt="Mountain background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <Image
              src={line}
              alt="Mountain background"
              className="mx-auto w-20 h-20"
            />
            <p className="text-lg md:text-xl leading-relaxed">
              At Zehenify, we are here to make a difference in the world of
              mental health care. We're revolutionizing the tools available to
              professionals in the field, empowering Practitioners with
              intelligent solutions designed to streamline therapy services,
              patient progress tracking, and practice management.
            </p>
            <p className="mt-6 text-lg md:text-xl leading-relaxed">
              More than just software, Zehenify is a committed partner in
              delivering exceptional mental health care, ensuring that
              professionals can focus on what truly matters: their patients'
              well-being. Together, we can transform the landscape of mental
              health support.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black">
              Pioneering A New Era In Mental Health Care
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <Image
                src={people}
                alt="Team collaboration"
                className="w-full rounded-lg"
              />
              <div className="bg-white bg-opacity-90 p-2 px-6 rounded-lg">
                <p className="text-lg leading-relaxed text-gray-800">
                  Zehenify is more than just software; it's a commitment to the
                  mental health community in Pakistan. Born from a deep
                  understanding of local challenges, we are dedicated to
                  empowering practitioners with innovative tools. Together,
                  we’re pioneering a future where quality care is not just a
                  privilege but a right accessible to everyone, fostering hope
                  and healing for all.
                </p>
                <p className="mt-4 text-gray-600 italic">- The Zehenify Team</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={teamBg}
            alt="Team background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="relative z-10 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                Zehenify Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member) => (
                  <div key={member.name} className="flex flex-col items-center">
                    <div className="w-40 h-40 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        objectFit="fit"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">
                      {member.name}
                    </h3>
                    <p className="text-teal-200 text-center mt-1">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
