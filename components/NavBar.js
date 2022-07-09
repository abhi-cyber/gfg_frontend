import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            {/* First block sec. Outer part */}
            <div className="flex items items-center mx-20 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-bold text-xl cursor-pointer">
                  <span className="text-green-500">GFG</span>
                </h1>
              </div>
              {/* Navbar for small screens */}
              <div className="hidden md:block">
                <div className="flex ml-10 items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer text-green-600 font-semibold px-3 py-2 text-md hover:font-black"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="About"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-green-600 px-3 py-2 text-black hover:text-white rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="Contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer bg-green-600 px-3 py-2 text-white hover:text-black rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
