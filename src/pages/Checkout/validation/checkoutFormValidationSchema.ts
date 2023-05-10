import { z } from "zod";
import { PaymentMethod } from '../components/CheckoutForm';

export const checkoutFormValidationSchema = z.object({
  cep: z
    .string({
      required_error: "CEP obrigatorio",
    })
    .transform((val) => val.replace(/([^\w ]|_)/g, "")),
  rua: z.string({
    required_error: 'Endereco obrigatorio'
  }),
  numero: z.string().optional(),
  complemento: z.string().optional(),
  bairro: z.string({
    required_error: 'Bairro obrigatorio'
  }),
  cidade: z.string({
    required_error: 'Cidade obrigatoria'
  }),
  uf: z.string({
    required_error: 'UF obrigatoria'
  }),
  paymentMethod: z.nativeEnum(PaymentMethod, {required_error: 'Selecione um metodo de pagamento'})
});