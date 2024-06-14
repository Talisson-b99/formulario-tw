import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: [
    'rounded-lg border  px-4 py-2.5 text-sm font-semibold  shadow-sm outline-none transition-all duration-200 ease-in-out',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary:
        ' border-violet-600 bg-violet-600 text-white shadow-sm hover:bg-violet-800 dark:bg-violet-500 dark:hover-bg-violet-600',
      secondary:
        ' border-zinc-300 bg-transparent text-zinc-700 shadow-sm outline-none t hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

const Button = ({ variant, ...props }: ButtonProps) => {
  return <button className={button({ variant })} {...props} />
}

export default Button
