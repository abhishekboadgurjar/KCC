"use client"; // Required for Next.js App Router

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* Top Contact Section */}
      <div className="bg-blue-900 text-white py-2 border-b border-blue-300">
        <div className="container mx-auto flex justify-between items-center px-6 text-sm">
          <p>Email: contact@kcc.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white text-black py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Corrected Image Usage */}
          <div className="relative w-[350px] h-[100px]">
            <Image
              src="/KCC_LOGO.png"
              alt="KCC Logo"
              layout="fill"
              objectFit="contain" // Maintains aspect ratio without cropping
              priority // Ensures fast loading
            />
          </div>

          <ul className="flex space-x-12 font-40px">
            <li>
              <Link
                href="/"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="clients"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
              >
                Clients
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition duration-300"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
