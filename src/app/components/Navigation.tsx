import React from "react";

import { navbar } from "../../../utils/data.js";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navigation() {
  return (
    <nav className="p-6 flex items-center justify-between border-b shadow-sm">
      <Link href="/">
        <h1 className="font-bold text-2xl text-primary">Furnique</h1>
      </Link>
      <div className="flex items-center justify-end gap-12">
        {navbar.map((item) => (
          <div key={item.id}>
            <Link className="font-rubik text-[20px]" href={item.link}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
