'use client'

import React, { useState } from "react";
import logo from "../public/logo.png";
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'How it works', path: '/howItWorks' },
    { label: 'Assessments', path: '/assesments' },
    { label: 'Pricing Plans', path: '/pricingPlans' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white border lg:px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src={logo.src}
            alt="Logo" 
            className="md:w-12 md:h-12 lg:w-10 lg:h-10 xl:w-12 xl:h-12 h-10 w-10 rounded-full ml-2"
          />
          <span className="text-[#006466] text-3xl lg:text-2xl xl:text-3xl font-bold">Zehenify</span>
        </div>

        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="text-black hover:text-[#006466] transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-black hover:text-[#006466] transition-colors"
            >
              Feature's <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                {[1, 2, 3, 4, 5].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-3 py-2 bg-[#006466] text-white rounded-lg hover:bg-[#005557] transition-colors">
            Start for free
          </button>
          <button className="px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Login
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-black"
        >
          {isMenuOpen ? <X className="w-6 h-6 mr-4" /> : <Menu className="w-6 h-6 mr-4" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-t z-50">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="block py-2 text-black hover:text-[#006466] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center w-full py-2 text-black hover:text-[#006466] transition-colors"
            >
              Feature's <ChevronDown className="ml-1 w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="pl-4 space-y-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-2 text-sm text-gray-700 hover:text-[#006466]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
            <div className="pt-4 space-y-2">
              <button className="w-full px-6 bg-[#006466] text-white rounded-lg hover:bg-[#005557] transition-colors">
                Start for free
              </button>
              <button className="w-full px-6 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}