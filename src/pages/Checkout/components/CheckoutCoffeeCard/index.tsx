import Image from "next/image";
import { Trash } from "@phosphor-icons/react";
import { shallow } from "zustand/shallow";

import { CartData, useCoffeeStore } from "@/store/coffeeStore";
import { IconButton } from "@/components/IconButton";
import { IncreaseButton } from "@/components/IncreaseButton";
import { imageCoffeeMapper } from "@/mappers/coffeeImageMapper";
import colors from "@/global/colors";

interface CheckoutCoffeeCardProps {
  data: CartData;
  removeFromCart: (id: number) => void;
}

export function CheckoutCoffeeCard({
  data,
  removeFromCart,
}: CheckoutCoffeeCardProps) {
  const [coffees, cart] = useCoffeeStore(
    (state) => [state.coffees, state.cart],
    shallow
  );
  const image = imageCoffeeMapper.get(data.name);

  const coffeeIndex = coffees.findIndex(
    (coffeeItem) => coffeeItem.id === data.id
  );
  const coffee = coffees[coffeeIndex];
  const coffeeCartIndex = cart.findIndex((item) => item.id === data.id);

  function handleAddQuantity() {
    if (coffee.qtd !== 0) {
      cart[coffeeCartIndex].qtd += 1;
      coffee.qtd -= 1;
      useCoffeeStore.setState({
        cart: [...cart],
        coffees: [...coffees],
      });
    }
  }

  function handleRemoveQuantity() {
    if (data.qtd !== 1) {
      cart[coffeeCartIndex].qtd -= 1;
      coffee.qtd += 1;
      useCoffeeStore.setState({
        cart: [...cart],
      });
    }
  }

  return (
    <div className="flex flex-col md:flex-row items-start border-b border-b-base-hover py-6">
      <Image height={64} width={64} src={image} alt="latte" className="mr-5" />
      <div className="flex gap-2 justify-between w-full">
        <div className="flex flex-col justify-center gap-2">
          <span className="text-base-subtitle font-normal text-base">
            {data.name}
          </span>
          <div className="flex items-center gap-2 ">
            <IncreaseButton
              count={data.qtd}
              add={() => handleAddQuantity()}
              remove={() => handleRemoveQuantity()}
              isDisabledAdd={coffee.qtd === 0}
              isDisabledRemove={data.qtd === 1}
            />
            <IconButton
              icon={<Trash size={18} color={colors["purple-dark"]} />}
              label="Remover"
              onClick={() => removeFromCart(data.id)}
            />
          </div>
        </div>
        <span className="ml-auto font-bold text-base text-base-text">
          {data.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
    </div>
  );
}
