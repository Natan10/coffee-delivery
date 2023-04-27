"use client";

// client component
import Image from "next/image";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import colors from "../../../../global/colors";
import logo from "../../../../../assets/logo.png";

export function Header() {
  return (
    <nav className="max-w-6xl mx-auto py-8 flex justify-between">
      <Image src={logo} alt="logo" className="w-[85px] h-[40px]" />

      <div className="flex items-center gap-3">
        <button
          className={`rounded-md flex justify-center items-center gap-1 p-2 bg-purple-light text-purple-dark text-sm`}
        >
          <MapPin size={20} color={colors["purple-dark"]} />
          Porto Alegre, RS
        </button>

        <button className="rounded-md bg-yellow-light p-2 relative">
          {/* <div className='absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-yellow-dark text-white font-bold text-xs rounded-full'>2</div> */}
          <ShoppingCart size={20} weight="fill" color={colors["yellow-dark"]} />
        </button>
      </div>
    </nav>
  );
}
