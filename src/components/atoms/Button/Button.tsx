import clsx from 'clsx'
import * as React from 'react'
import 'tailwindcss'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed',
  secondary:
    'bg-secondary text-black hover:bg-secondary/90 disabled:bg-secondary/50 disabled:cursor-not-allowed',
  outline:
    'border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed',
  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed'
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, disabled, children, ...props }, ref) => {
    return (
      <>
        <div className="bg-primary border-red-500 text-4xl font-bold">Check JIT</div>
        <button
          ref={ref}
          disabled={disabled}
          className={clsx(
            'inline-flex items-center justify-center font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none',
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
        </button>
      </>
    )
  }
)

Button.displayName = 'Button'
