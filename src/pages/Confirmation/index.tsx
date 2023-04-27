import Lottie from "lottie-react";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

import confirmationAnimation from "@/assets/confirmation.json";

export function Confirmation() {
  return (
    <section className="mt-16 md:mt-24 max-w-6xl px-3 pb-20 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <div className="flex flex-col gap-1">
            <h1 className="font-baloo font-extrabold text-yellow-dark text-[32px]">
              Uhu! Pedido confirmado
            </h1>
            <p className="font-roboto text-xl text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </div>

          <div
            className={`mt-10 p-[1px] rounded-md rounded-tr-[36px] rounded-bl-[36px]  bg-gradient-to-r from-yellow-mid to-purple-mid`}
          >
            <div
              className={`
              w-full bg-white p-12 flex flex-col gap-[32px] rounded-md rounded-tr-[36px] rounded-bl-[36px]
            `}
            >
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-purple-dark">
                  <MapPin size={16} color={"#FAFAFA"} weight="fill" />
                </div>
                <div>
                  <p className="text-base text-base-title font-roboto">
                    Entrega em <strong>Rua Joao Daniel Martinellie, 102</strong>
                  </p>
                  <p className="text-base text-base-title font-roboto">
                    Farrapos - Porto Alegre, RS
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-mid">
                  <Timer size={16} color={"#FAFAFA"} weight="fill" />
                </div>
                <div>
                  <p className="text-base text-base-title font-roboto">
                    Previsao de entrega {"\n"}
                  </p>
                  <strong className="text-base text-base-title font-roboto">
                    20 min - 30 min
                  </strong>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex justify-center items-center rounded-full bg-yellow-dark">
                  <CurrencyDollar size={16} color={"#FAFAFA"} />
                </div>
                <div>
                  <p className="text-base text-base-title font-roboto">
                    Pagamento na entrega{"\n"}
                  </p>
                  <strong className="text-base-title font-roboto">
                    Cartao de Credito
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-center">
          <Lottie animationData={confirmationAnimation} />
        </div>
      </div>
    </section>
  );
}
