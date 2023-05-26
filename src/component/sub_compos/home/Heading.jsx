import React, { useEffect, useRef } from "react";
import logo from "/apex_logo.svg";
import { HiMenu } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

export default function Heading() {
  const menuButton = useRef(null),
    navBar = useRef(null);

  useEffect(() => {
    const menu = menuButton.current,
      navigationBar = navBar.current;

    menu.childNodes[0].addEventListener("click", () => {
      navigationBar.classList.forEach((className) => {
        if (className === "hidden") {
          navigationBar.classList.remove("hidden");
          navigationBar.classList.add("block");

          menu.children[0].style.display = "none";
          menu.children[1].style.display = "inline-block";

          const menuGrandParent = menu.parentElement.parentElement;
          menuGrandParent.style.flexDirection = "column";
        }
      });
    });

    menu.childNodes[1].addEventListener("click", () => {
      navigationBar.classList.forEach((className) => {
        if (className === "lg:flex") {
          navigationBar.classList.add("hidden");

          menu.children[0].style.display = "inline-block";
          menu.children[1].style.display = "none";
        }
      });
    });
  }, []);

  return (
    <>
      <header className="z-10 fixed w-full border-b-4 border-tw-blue-300 bg-tw-blue-500 text-white">
        <div className="w-[90vw] mx-auto lg:w-80vw p-3 flex justify-between lg:justify-start">
          <section className="flex items-center w-full lg:w-auto">
            <div className="flex items-center space-x-3 flex-grow">
              <div>
                <img
                  src={logo}
                  alt="Apex Recovery Logo"
                  width={40}
                  loading="lazy"
                />
              </div>
              <h1 className="uppercase font-bold text-lg font-outfit">
                <span className="text-tw-blue-300">Apex</span>Recovery Firm
              </h1>
            </div>

            <div className="lg:hidden" ref={menuButton}>
              <HiMenu className="text-xl cursor-pointer hover:text-gray-200" />
              <MdOutlineClose className="text-xl cursor-pointer hover:text-gray-200 hidden" />
            </div>
          </section>

          <section className="lg:flex-grow font-bold">
            <nav className="hidden lg:flex" ref={navBar}>
              <div className="lg:flex flex-grow justify-center text-center">
                <div className="lg:first:pl-0 lg:last:pr-0 px-8 py-2">
                  <a className="hover:text-tw-blue-300" href="/">
                    Home
                  </a>
                </div>
                <div className="lg:first:pl-0 lg:last:pr-0 px-8 py-2">
                  <a className="hover:text-tw-blue-300" href="#services">
                    Services
                  </a>
                </div>
                <div className="lg:first:pl-0 lg:last:pr-0 px-8 py-2">
                  <a className="hover:text-tw-blue-300" href="/about">
                    About us
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex uppercase text-sm space-x-4">
                <div className="first:pl-0 last:pr-0 px-2 py-2 relative group">
                  <a className="hover:text-tw-blue-300" href="#">
                    Scams
                    <span>
                      <RiArrowDropDownLine className="inline-block text-2xl" />
                    </span>
                  </a>
                  <div className="absolute group-hover:block right-2 hidden bg-tw-blue-500 px-4 py-2 w-[150px] shadow-md rounded">
                    <ul>
                      <li className="cursor-pointer last:mb:0 mb-2 hover:text-tw-blue-300">
                        What it is?
                      </li>
                      <li className="cursor-pointer last:mb:0 mb-2 hover:text-tw-blue-300">
                        How it is?
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="first:pl-0 last:pr-0 px-2 py-2">
                  <a
                    className="rounded-full border-2 px-4 py-2 border-tw-blue-300 text-tw-blue-300"
                    href="#contact"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </header>
    </>
  );
}
