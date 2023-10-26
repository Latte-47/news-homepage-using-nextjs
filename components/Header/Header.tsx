"use client";

import Image from "next/image";
import "./header.scss";
import logo from "@/public/assets/icons/logo.svg";
import menuOpen from "@/public/assets/icons/icon-menu.svg";
import menuClose from "@/public/assets/icons/icon-menu-close.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const logoclick = () => {
    router.push("/");
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-main">
        <div className="header-logo">
          <Image className="logo" src={logo} alt="logo" onClick={logoclick} />
        </div>
        <div className="header-menu">
          {isOpen ? (
            <Image
              className="menu-close"
              src={menuClose}
              alt="menuClose"
              onClick={toggle}
            />
          ) : (
            <Image
              className="menu-close"
              src={menuOpen}
              alt="menuOpen"
              onClick={toggle}
            />
          )}
        </div>
        <div
          className={`${isOpen ? "mask-on" : "mask-off"}`}
          onClick={toggle}
        />
        <div className={`${isOpen ? "navlinks-open" : "header-navlinks"}`}>
          <ul className="navlinks">
            <li>
              <a className="nav-items">Home</a>
            </li>
            <li>
              <a className="nav-items">New</a>
            </li>
            <li>
              <a className="nav-items">Popular</a>
            </li>
            <li>
              <a className="nav-items">Trending</a>
            </li>
            <li>
              <a className="nav-items">Categories</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
