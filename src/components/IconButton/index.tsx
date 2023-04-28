import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
  label: string;
  active?: boolean;
  customStyles?: string;
}

export function IconButton({
  icon,
  label,
  active,
  customStyles,
  ...rest
}: Props) {
  return (
    <button
      className={twMerge(`
    p-2 flex justify-center items-center gap-3 
    uppercase text-xs text-base-text rounded 
    bg-base-button hover:bg-base-hover

    ${active && "border border-purple-dark bg-purple-light pointer-events-none"}
    ${customStyles}
  `)}
      {...rest}
    >
      {icon}
      {label}
    </button>
  );
}
