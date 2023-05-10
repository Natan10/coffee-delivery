import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { PaymentMethod } from "../CheckoutForm";

interface PaymentButtonProps {
  paymentMethod: PaymentMethod;
  icon: React.ReactElement;
  title: string;
  active?: boolean;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions<FieldValues, string>;
}

export function PaymentButton({
  icon,
  title,
  paymentMethod,
  active,
  register,
  registerOptions,
}: PaymentButtonProps) {
  return (
    <label
      className={`
      p-4 flex justify-center items-center gap-3 
      uppercase text-xs text-base-text rounded 
      bg-base-button hover:bg-base-hover
      ${
        active &&
        "border border-purple-dark bg-purple-light pointer-events-none"
      }
   `}
    >
      {icon}
      {title}
      <input
        type="radio"
        className="hidden"
        {...register("paymentMethod", { ...registerOptions })}
        value={paymentMethod}
      />
    </label>
  );
}
