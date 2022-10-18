import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
const Navbar = () => {
  function changeBackground() {
    if (window.scrollY > 80) {
      document.querySelector("#nav").style.backgroundColor = "black";
    } else {
      document.querySelector("#nav").style.backgroundColor = "";
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div id="nav" className="w-full fixed p-4 z-[100] text-xs">
      <div className="">
        <ul className="">
          <li>
            <h1 className="text-red-600 text-3xl font-bold">NETFLIX</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
