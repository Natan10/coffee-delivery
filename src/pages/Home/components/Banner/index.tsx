import Image from "next/image";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import cupCoffee from "@/assets/cup-coffee.png";

export function Banner() {
  return (
    <section className="mt-16 md:mt-24 max-w-6xl px-3 mx-auto">
      <div className="flex flex-col items-center md:flex-row gap-14 ">
        <div>
          <div className="mb-16">
            <div>
              <p className="font-baloo text-4xl md:text-5xl text-base-title">
                Encontre o cafe perfeito
              </p>
              <p className="font-baloo text-4xl md:text-5xl text-base-title">
                para qualquer hora do dia
              </p>
            </div>
            <p className="mt-4 font-roboto text-xl text-base-subtitle font-normal">
              Com o Coffe Delivery voce recebe seu cafe onde estiver a {"\n"}
              qualquer hora
            </p>
          </div>

          {/* icons */}
          <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-dark">
                  <ShoppingCart size={16} color={"#FAFAFA"} weight="fill" />
                </div>
                <span className="text-base text-base-title font-roboto">
                  Compra simples e segura
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-mid">
                  <Timer size={16} color={"#FAFAFA"} weight="fill" />
                </div>
                <span className="text-base text-base-title font-roboto">
                  Entrega rapida e rastreada
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-base-title">
                  <Package size={16} color={"#FAFAFA"} weight="fill" />
                </div>
                <span className="text-base text-base-title font-roboto">
                  Embalagem mantem o cafe intacto
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-purple-dark">
                  <Coffee size={16} color={"#FAFAFA"} weight="fill" />
                </div>
                <span className="text-base text-base-title font-roboto">
                  O cafe chega fresquinho ate voce
                </span>
              </div>
            </div>
          </div>
        </div>

        <Image src={cupCoffee} alt="cup of coffee" />
      </div>
    </section>
  );
}
