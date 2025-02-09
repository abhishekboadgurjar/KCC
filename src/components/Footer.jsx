import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">KCC</h2>
          <p className="mt-2 text-gray-300">
            Building roads, connecting futures. Trusted infrastructure solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white text-blue-900 rounded-full hover:bg-gray-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} KCC. All rights reserved.
      </div>
    </footer>
  );
}
