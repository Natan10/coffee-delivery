import Image from "next/image";
import { Trash } from "@phosphor-icons/react";

import { IconButton } from "@/components/IconButton";
import { IncreaseButton } from "@/components/IncreaseButton";
import colors from "@/global/colors";

import latte from "@/assets/card-coffee/Latte.svg";

export function CheckoutCoffeeCard() {
  return (
    <div className="flex flex-col md:flex-row items-start border-b border-b-base-hover py-6">
      <Image height={64} width={64} src={latte} alt="latte" className="mr-5" />
      <div className="flex gap-2 justify-between w-full">
        <div className="flex flex-col justify-center gap-2">
          <span className="text-base-subtitle font-normal text-base">
            Expresso Tradicional
          </span>
          <div className="flex items-center gap-2 ">
            <IncreaseButton />
            <IconButton
              icon={<Trash size={18} color={colors["purple-dark"]} />}
              label="Remover"
            />
          </div>
        </div>
        <span className="ml-auto font-bold text-base text-base-text">
          R$ 19.80
        </span>
      </div>
    </div>
  );
}
