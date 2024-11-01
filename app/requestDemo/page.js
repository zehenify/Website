"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import img from "../../public/user.png";

export default function Component() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 py-24 px-72">
      <div className="w-full md:w-1/2 bg-[#006466] text-white flex flex-col justify-center items-center overflow-hidden rounded-l-xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6">Request a Demo</h1>
        <div className="flex flex-col items-center mb-6">
          <img
            src={img.src}
            alt="Mohammad Khan"
            className="rounded-full w-24 h-24 mb-4"
          />
          <p className="text-xl font-semibold">Meet with Mohammad Khan</p>
        </div>
        <Calendar
          onChange={setDate}
          value={date}
          className="bg-white text-teal-700 rounded-lg shadow-l"
        />
      </div>

      <div className="w-full md:w-1/2 p-8 bg-white rounded-r-xl shadow-xl">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="clientName"
              className="block text-sm font-medium text-gray-700"
            >
              Client name
            </label>
            <input
              type="text"
              id="clientName"
              name="clientName"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter client name"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label
              htmlFor="clinician"
              className="block text-sm font-medium text-gray-700"
            >
              Clinician in your practice
            </label>
            <select
              id="clinician"
              name="clinician"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
            >
              <option value="" className="">
                Select
              </option>
              <option value="solo">Solo practitioner</option>
              <option value="1-5">1 - 5</option>
              <option value="6-10">6 - 10</option>
              <option value="10+">10+</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-700 text-white rounded-md py-2 px-4 hover:bg-teal-800 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
