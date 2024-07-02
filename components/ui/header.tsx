"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            {/*  <Logo /> */}{" "}
            <Image src="/images/logo2.png" width={30} height={20} alt="logo"/>

            <Link href="/">
              <h1
                style={{
                  fontSize: "1.3rem",
                  padding: "0 .5rem",
                  cursor: "pointer",
                }}
              >
                Brotocode.com
              </h1>{" "}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/portfolio"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Portfolio
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/about"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  About
                </Link>
              </li>
           {/*    <Dropdown title="Industries">
          
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    B2B
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SaaS
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Startups
                  </Link>
                </li>
              </Dropdown> */}
             

              {/* 1st level: hover */}
              <Dropdown title="Our Services">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    UI/UX Desgin
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    E-Commerce
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    App Development
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
