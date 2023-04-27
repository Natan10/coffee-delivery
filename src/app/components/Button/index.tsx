import {twMerge} from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  styles?: string;
  icon?: any
}

export function Button({label,icon, styles = '', ...rest}: Props){

  return(
    <button className={twMerge(`
      w-full p-3 py-2 flex justify-center items-center gap-2
      rounded-md uppercase text-[14px] font-bold text-white font-roboto
      transition-colors ${styles}
    `)} {...rest}>
      {icon}
      {label}
    </button>
  )
}