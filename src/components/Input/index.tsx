import { twMerge } from "tailwind-merge";
import { UseFormRegister, FieldValues, RegisterOptions } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegister<FieldValues>;
  registerOptions?: RegisterOptions<FieldValues, string>;
  customStyles?: string;
}

export function Input({
  label,
  register,
  registerOptions,
  customStyles = "",
  ...rest
}: Props) {
  return (
    <div
      className={twMerge(
        `flex items-center p-3 border hover:border-yellow-mid rounded bg-base-button ${customStyles}`
      )}
    >
      <input
        className="flex-1 outline-none placeholder:text-base-label text-base-text bg-transparent"
        {...rest}
        {...register(label, { ...registerOptions })}
      />

      {/* {!registerOptions?.required && (
        <span className="italic text-base-label text-xs">Opcional</span>
      )} */}
    </div>
  );
}
