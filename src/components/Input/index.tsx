import { twMerge } from "tailwind-merge";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  customStyles?: string;
}

export function Input({ customStyles = "", ...rest }: Props) {
  const { value, required } = rest;

  return (
    <div
      className={twMerge(
        `flex items-center p-3 border hover:border-yellow-mid rounded bg-base-button ${customStyles}`
      )}
    >
      <input
        className="flex-1 outline-none placeholder:text-base-label text-base-text bg-transparent"
        {...rest}
      />

      {!required && !value && (
        <span className="italic text-base-label text-xs">Opcional</span>
      )}
    </div>
  );
}
