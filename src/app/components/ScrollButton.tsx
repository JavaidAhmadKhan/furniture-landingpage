"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import bottomImg from "../../images/bottom.png";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className="fixed right-0 bottom-8 px-4 cursor-pointer z-40">
      <Image
        width={46}
        height={46}
        alt="Top"
        src={bottomImg}
        className="w-[36px] md:w-[46px] xl:w-[46px] bg-orangeText rounded-full"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default ScrollButton;
