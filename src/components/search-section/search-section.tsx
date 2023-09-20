"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchTab from "./search-tab/search-tab";

const SearchSection = () => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100; // Adjust this value to determine when to apply the CSS styles
      const isMobile = window.innerWidth <= 768;
      if (!isMobile) {
        if (scrollPosition > scrollThreshold) {
          setScrollDown(true);
        } else {
          setScrollDown(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollDown
          ? "fixed bg-white w-full border-b border-[#dadce0] shadow-[0_1px_6px_0px_rgba(32,30,36,0.28)] pt-[0.625rem] pb-[0.625rem]"
          : "pt-6 pb-8"
      } lg:flex gap-[2.75rem] items-center  w-full`}
    >
      <div className="relative w-[92px] h-[30px]  mx-auto mb-4 lg:mb-0 lg:ml-[4.75rem] lg:mr-0">
        <Image src="/google-logo.png" alt="google-logo" fill />
      </div>
      <SearchTab scrollDown={scrollDown} />
    </div>
  );
};

export default SearchSection;
