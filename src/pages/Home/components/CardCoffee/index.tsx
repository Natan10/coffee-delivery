import { useCallback, useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "@phosphor-icons/react";

import { IncreaseButton } from "@/components/IncreaseButton";
import { CoffeeModel } from "@/domain/models/coffee";
import { imageCoffeeMapper } from "@/mappers/coffeeImageMapper";
import { useCoffeeStore } from "@/store/coffeeStore";
interface CardCoffeeProps {
  data: CoffeeModel;
}

export function CardCoffee({
  data: { id, name, price, qtd, description, types },
}: CardCoffeeProps) {
  const { addCoffeeToCart, updateCoffeeState } = useCoffeeStore();

  const [quantity, setQuantity] = useState(qtd);

  const coffeeImage = imageCoffeeMapper.get(name);

  const handleAddCoffee = useCallback(() => {
    addCoffeeToCart({
      id,
      name,
      price,
      qtd: quantity,
    });
    updateCoffeeState(id, quantity);
    setQuantity((old) => qtd - old);
  }, [quantity]);

  const add = () => setQuantity((old) => old + 1);
  const remove = () => setQuantity((old) => old - 1);

  return (
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
        <Image src={coffeeImage} alt="tradicional" />
        <div className="flex flex-wrap justify-center items-center gap-1">
          {types.map((type) => (
            <span
              key={type}
              className="p-1 uppercase text-[10px] font-bold font-roboto text-yellow-dark bg-yellow-light rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex-1 text-center">
        <span className="font-bold font-baloo text-xl capitalize text-base-subtitle">
          {name}
        </span>
        <p className="mt-2 font-roboto font-normal text-sm text-base-label">
          {description || "Sem descricao"}
        </p>
      </div>

      <div className="mt-9 w-full flex justify-between items-center">
        <span className="font-roboto text-sm text-base-text">
          R${" "}
          <b className="font-baloo text-2xl text-base-title font-extrabold">
            {price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
          </b>
        </span>

        <div className="flex items-center gap-2">
          {qtd > 0 && (
            <IncreaseButton
              add={() => add()}
              remove={() => remove()}
              count={quantity}
              isDisabledAdd={quantity === qtd}
              isDisabledRemove={quantity === 1}
            />
          )}
          <button
            disabled={qtd === 0}
            className="rounded-md bg-purple-dark hover:bg-purple-mid disabled:bg-base-label p-2 relative"
            onClick={handleAddCoffee}
          >
            <ShoppingCart size={16} weight="fill" color={"#FAFAFA"} />
          </button>
        </div>
      </div>
    </div>
  );
}
