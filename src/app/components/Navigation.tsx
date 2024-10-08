import React from "react";

import { navbar } from "../../lib/data.js";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navigation() {
  return (
    <nav className="px-4 py-6 flex items-center justify-between border-b shadow-sm">
      <Link href="/">
        <h1 className="font-rubikMedium text-2xl text-primary">Furnique</h1>
      </Link>
      <div className=" items-center justify-end gap-4 md:gap-12 hidden md:flex">
        {navbar.map((item) => (
          <div key={item.id}>
            <Link
              className="font-rubik text-[20px] text-blackText dark:text-white"
              href={item.link}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
