import { useState, useEffect } from "react";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";

import { PaymentButton } from "../PaymentButton";
import { Input } from "@/components/Input";
import colors from "@/global/colors";

export enum PaymentMethod {
  cash = "cash",
  creditCard = "creditCard",
  debitCard = "debitCard",
}

export function CheckoutForm() {
  const { register, watch, setValue } = useFormContext();
  const [loadDataByCEP, setLoadDataByCEP] = useState(false);

  const cep = watch("cep") as string;
  const paymentMethod = watch("paymentMethod") as PaymentMethod;

  async function getDataByCEP(cep: string) {
    if (cep.length !== 8) {
      return;
    }
    try {
      setLoadDataByCEP(true);
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const response = await data.json();

      if (response.erro) {
        console.info("Nao foi possivel carregar os dados");
        return;
      }

      const {
        bairro,
        complemento,
        localidade: cidade,
        logradouro: rua,
        uf,
      } = response;

      setValue("rua", rua);
      setValue("bairro", bairro);
      setValue("cidade", cidade);
      setValue("uf", uf);
      setValue("complemento", complemento);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadDataByCEP(false);
    }
  }

  useEffect(() => {
    (async () => {
      if (cep) {
        const cleanCep = cep.replace(/([^\w ]|_)/g, "");
        if (cleanCep.length === 8) {
          await getDataByCEP(cleanCep);
        }
      }
    })();
  }, [cep]);

  return (
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
          <Input
            type="text"
            label="cep"
            placeholder="CEP"
            register={register}
            registerOptions={{
              required: true,
            }}
            disabled={loadDataByCEP}
          />
          <Input
            placeholder="Rua"
            label="rua"
            register={register}
            registerOptions={{
              required: true,
            }}
            disabled={loadDataByCEP}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              placeholder="Número"
              label="numero"
              type="text"
              register={register}
              registerOptions={{
                required: true,
              }}
              disabled={loadDataByCEP}
            />
            <Input
              placeholder="Complemento"
              label="complemento"
              customStyles="flex-1"
              register={register}
              disabled={loadDataByCEP}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_80px] gap-3">
            <Input
              placeholder="Bairro"
              label="bairro"
              register={register}
              customStyles="flex-1"
              disabled={loadDataByCEP}
            />
            <Input
              placeholder="Cidade"
              customStyles="flex-1"
              label="cidade"
              register={register}
              disabled={loadDataByCEP}
            />
            <Input
              placeholder="UF"
              customStyles="flex-shrink"
              label="uf"
              register={register}
              disabled={loadDataByCEP}
            />
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
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-3">
          <PaymentButton
            icon={<CreditCard size={18} color={colors["purple-dark"]} />}
            title="Cartão de crédito"
            register={register}
            paymentMethod={PaymentMethod.creditCard}
            active={paymentMethod === PaymentMethod.creditCard}
          />
          <PaymentButton
            icon={<Bank size={18} color={colors["purple-dark"]} />}
            title="Cartão de débito"
            register={register}
            paymentMethod={PaymentMethod.debitCard}
            active={paymentMethod === PaymentMethod.debitCard}
          />
          <PaymentButton
            icon={<Money size={18} color={colors["purple-dark"]} />}
            title="Dinheiro"
            register={register}
            paymentMethod={PaymentMethod.cash}
            active={paymentMethod === PaymentMethod.cash}
          />
        </div>
      </div>
    </div>
  );
}
