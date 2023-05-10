import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useCoffeeStore } from "@/store/coffeeStore";
import { formatCurrency } from "../utils/formatCurrency";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";
import { CheckoutForm, PaymentMethod } from "./components/CheckoutForm";
import { checkoutFormValidationSchema } from "./validation/checkoutFormValidationSchema";
import { CoffeeLoad } from "@/components/CoffeeLoad";

type CheckoutFormType = z.infer<typeof checkoutFormValidationSchema>;

const DELIVERY_COST = 3.5;

export function Checkout() {
  const router = useRouter();
  const methods = useForm<CheckoutFormType>({
    defaultValues: {
      paymentMethod: PaymentMethod.cash,
    },
    resolver: zodResolver(checkoutFormValidationSchema),
  });
  const data = useCoffeeStore((state) => state.cart);
  const [isSendingData, setIsSendingData] = useState(false);
  const { removeCoffeeFromCart } = useCoffeeStore();
  const { handleSubmit } = methods;

  function handleRemoveCoffeeFromCart(id: number) {
    removeCoffeeFromCart(id);
  }

  const totalItems = data.reduce((prev, current) => {
    return (prev += current.price * current.qtd);
  }, 0);

  async function onSubmit(data: any) {
    setIsSendingData(true);

    setTimeout(() => {
      router.push("/confirmation");
      useCoffeeStore.setState({
        cart: [],
      });
    }, 3000);
  }
  return (
    <FormProvider {...methods}>
      <section className="relative mt-10 max-w-6xl px-3 pb-20 mx-auto">
        {isSendingData && <CoffeeLoad />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,448px)] gap-8">
            <div>
              <h3 className="font-baloo font-bold text-lg text-base-subtitle">
                Complete seu pedido
              </h3>
              <CheckoutForm />
            </div>

            <div>
              <h3 className="font-baloo font-bold text-lg text-base-subtitle">
                Cafés selecionados
              </h3>

              <div className="mt-3 bg-base-card p-6 md:p-10 rounded rounded-tr-[44px] rounded-bl-[44px]">
                <div className="flex flex-col">
                  {data.map((coffee) => {
                    return (
                      <CheckoutCoffeeCard
                        key={coffee.id}
                        data={coffee}
                        removeFromCart={handleRemoveCoffeeFromCart}
                      />
                    );
                  })}
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-base-text text-sm">
                      Total de itens
                    </span>
                    <span className="text-base-text text-base">
                      {formatCurrency({ value: totalItems })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base-text text-sm">Entrega</span>
                    <span className="text-base-text text-base">
                      {formatCurrency({ value: DELIVERY_COST })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-base-subtitle font-bold text-lg">
                      Total
                    </span>
                    <span className="text-base-subtitle font-bold text-lg">
                      {formatCurrency({ value: totalItems + DELIVERY_COST })}
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!data.length}
                  className="mt-6 w-full p-3 rounded text-center font-bold text-sm uppercase text-white bg-yellow-mid hover:bg-yellow-dark disabled:bg-base-text"
                >
                  Confirmar Pedido
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </FormProvider>
  );
}
