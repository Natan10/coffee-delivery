"use client";

import Image from "next/image";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useCoffeeStore } from "@/store/coffeeStore";
import colors from "@/global/colors";
import logo from "@/assets/logo.png";

export function Header() {
  const cart = useCoffeeStore((state) => state.cart);
  const router = useRouter();

  return (
    <nav className="w-full max-w-6xl mx-auto px-3 py-8 flex justify-between">
      <Link href={"/"}>
        <Image src={logo} alt="logo" className="w-[85px] h-[40px]" />
      </Link>

      <div className="flex items-center gap-3">
        <button
          className={`rounded-md flex justify-center items-center gap-1 p-2 bg-purple-light text-purple-dark text-sm`}
        >
          <MapPin size={20} color={colors["purple-dark"]} />
          Porto Alegre, RS
        </button>

        <button
          onClick={() => router.push("/checkout")}
          className="rounded-md bg-yellow-light p-2 relative"
        >
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-yellow-dark text-white font-bold text-xs rounded-full">
              {cart.length}
            </div>
          )}
          <ShoppingCart size={20} weight="fill" color={colors["yellow-dark"]} />
        </button>
      </div>
    </nav>
  );
}
