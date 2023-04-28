import { useState } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

import { Input } from "@/components/Input";
import { IconButton } from "@/components/IconButton";
import { CheckoutCoffeeCard } from "./components/CheckoutCoffeeCard";
import colors from "@/global/colors";

export function Checkout() {
  const [paymentType, setPaymentType] = useState<
    "cash" | "creditCard" | "debitCard"
  >("cash");
  return (
    <section className="mt-10 max-w-6xl px-3 pb-20 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,448px)] gap-8">
        {/* form */}
        <div>
          <h3 className="font-baloo font-bold text-lg text-base-subtitle">
            Complete seu pedido
          </h3>

          {/* form fields */}
          <div>
            <div className="mt-3 bg-base-card p-6 md:p-10 rounded">
              <div className="flex gap-2">
                <MapPinLine
                  size={20}
                  className="mt-1"
                  color={colors["yellow-dark"]}
                />
                <div>
                  <p className="text-base-subtitle text-base font-roboto">
                    Endereço de Entrega
                  </p>
                  <p className="text-base-text text-sm">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <Input placeholder="CEP" required />
                <Input placeholder="Rua" required />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="Número" />
                  <Input
                    placeholder="Complemento"
                    customStyles="flex-1"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_80px] gap-3">
                  <Input placeholder="Bairro" customStyles="flex-1" required />
                  <Input placeholder="Cidade" customStyles="flex-1" />
                  <Input placeholder="UF" customStyles="flex-shrink" required />
                </div>
              </div>
            </div>

            <div className="mt-3 bg-base-card p-10 rounded">
              <div className="flex gap-2">
                <CurrencyDollar
                  size={20}
                  className="mt-1"
                  color={colors["purple-dark"]}
                />
                <div>
                  <p className="text-base-subtitle text-base font-roboto">
                    Pagamento
                  </p>
                  <p className="text-base-text text-sm">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col md:flex-row md:items-center gap-3">
                <IconButton
                  icon={<CreditCard size={18} color={colors["purple-dark"]} />}
                  label="Cartão de crédito"
                  active={paymentType === "creditCard"}
                  customStyles="p-4"
                  onClick={() => setPaymentType("creditCard")}
                />
                <IconButton
                  icon={<Bank size={18} color={colors["purple-dark"]} />}
                  label="Cartão de débito"
                  active={paymentType === "debitCard"}
                  customStyles="p-4"
                  onClick={() => setPaymentType("debitCard")}
                />

                <IconButton
                  icon={<Money size={18} color={colors["purple-dark"]} />}
                  label="Dinheiro"
                  active={paymentType === "cash"}
                  customStyles="p-4"
                  onClick={() => setPaymentType("cash")}
                />
              </div>
            </div>
          </div>
        </div>

        {/* coffees */}
        <div>
          <h3 className="font-baloo font-bold text-lg text-base-subtitle">
            Cafés selecionados
          </h3>

          <div className="mt-3 bg-base-card p-6 md:p-10 rounded rounded-tr-[44px] rounded-bl-[44px]">
            <div className="flex flex-col">
              <CheckoutCoffeeCard />
              <CheckoutCoffeeCard />
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-base-text text-sm">Total de itens</span>
                <span className="text-base-text text-base">R$ 29.70</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base-text text-sm">Entrega</span>
                <span className="text-base-text text-base">R$ 3.50</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-base-subtitle font-bold text-lg">
                  Total
                </span>
                <span className="text-base-subtitle font-bold text-lg">
                  R$ 33.20
                </span>
              </div>
            </div>
            <button className="mt-6 w-full p-3 rounded text-center font-bold text-sm uppercase text-white bg-yellow-mid hover:bg-yellow-dark">
              Confirmar Pedido
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
