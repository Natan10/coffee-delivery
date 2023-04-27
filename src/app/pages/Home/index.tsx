"use client";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";

import { Banner } from "./components/Banner";
import { Header } from "./components/Header";

import colors from "@/global/colors";
import tradicional from "@/assets/card-coffee/Americano.svg";

export function Home() {
  return (
    <>
      <Header />
      <Banner />

      {/* card coffee */}
      <div className="w-full flex justify-center my-10">
        <div
          className={`
          max-w-[256px] max-h-80 px-6 pb-5
          flex flex-col items-center 
          bg-base-card
          rounded-md
          rounded-tr-[36px]
          rounded-bl-[36px]
        `}
        >
          <div className="-mt-4 flex flex-col items-center gap-3">
            <Image src={tradicional} alt="tradicional" />
            <div className="flex flex-wrap justify-center items-center gap-1">
              <span className="p-1 uppercase text-[10px] font-bold font-roboto text-yellow-dark bg-yellow-light rounded-full">
                Tradicional
              </span>
              <span className="p-1 uppercase text-[10px] font-bold font-roboto text-yellow-dark bg-yellow-light rounded-full">
                Gelado
              </span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="font-bold font-baloo text-xl text-base-subtitle">
              Expresso Tradicional
            </span>
            <p className="mt-2 font-roboto font-normal text-sm text-base-label">
              O tradicional cafe feito com agua quente e graos moidos
            </p>
          </div>

          <div className="mt-9 w-full flex justify-between items-center">
            <span className="font-roboto text-sm text-base-text">
              R${" "}
              <b className="font-baloo text-2xl text-base-title font-extrabold">
                9.90
              </b>
            </span>

            <div className="flex items-center gap-2">
              <div className="p-1 flex items-center gap-2 rounded-md bg-base-button">
                <button>
                  <Minus size={12} color={colors["purple-dark"]} />
                </button>
                <span className="text-base text-base-title">2</span>
                <button>
                  <Plus size={12} color={colors["purple-dark"]} />
                </button>
              </div>
              <button className="rounded-md bg-purple-dark p-2 relative">
                <ShoppingCart size={16} weight="fill" color={"#FAFAFA"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
