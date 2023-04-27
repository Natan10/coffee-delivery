import { ReactNode } from 'react';
import {twMerge} from 'tailwind-merge'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styles?: string;
  icon: ReactNode;
  badgeCount?: number;
  badgeColor?: string;
}

export function IconButton({
  icon,
   styles = '', badgeCount, badgeColor, ...rest}: Props){
  return(
    <button className={twMerge(`
      w-[38px] h-[38px] p-2
      rounded-md 
      transition-colors ${styles}
      relative
    `)} {...rest}>
      {!!badgeCount && <div className={`
        absolute -top-2 -right-2 w-5 h-5 rounded-full text-[12px] font-bold text-white ${badgeColor}`}>
        {badgeCount}
      </div>
      }
      {icon}
    </button>
  )
}