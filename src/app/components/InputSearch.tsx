import React from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function InputSearch() {
  return (
    <form className="flex items-center justify-center mt-[43px] md:mt-[76px]">
      <div className="bg-[#F5F5F5] flex items-center justify-center py-1 px-4 rounded-md">
        <Search color="#A8A8A8" />
        <input
          className="py-3 bg-[#F5F5F5] outline-none"
          type="text"
          placeholder="Search your furnitures..."
        />
        <Button className="text-white p-5">Search</Button>
      </div>
    </form>
  );
}
