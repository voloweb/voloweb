import { ButtonHTMLAttributes } from 'react'
export interface TypeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}

export default function Button({
  children,
  secondary,
  className,
  ...rest
}: TypeButton) {
  return (
    <button
      {...rest}
      type={rest.type || 'button'}
      className={`${
        secondary
          ? 'bg-primaria-4 hover:bg-semantica-1 text-semantica-1 hover:text-white'
          : 'bg-semantica-1 hover:opacity-95 text-white'
      } font-normal h-[51px] p-4 rounded-lg leading-5 ${className}`}
    >
      {children}
    </button>
  )
}
