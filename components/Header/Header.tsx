"use client";

import Image from "next/image";
import "./header.scss";
import Logo from "@/public/assets/icons/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="header-main">
        <div className="header-logo">
          <Image className="logo" src={Logo} alt="logo" />
        </div>
        <div className="header-navlinks">
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
