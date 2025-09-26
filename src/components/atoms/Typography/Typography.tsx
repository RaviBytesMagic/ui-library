import clsx from 'clsx'
import React, { ElementType, ReactNode } from 'react'

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'

export type TypographyProps<T extends ElementType> = {
  as?: T // allow override of rendered element
  variant?: Variant
  children: ReactNode
  className?: string
} & React.ComponentPropsWithoutRef<T>

const variantClasses: Record<Variant, string> = {
  h1: 'text-4xl font-bold tracking-tight',
  h2: 'text-3xl font-semibold tracking-tight',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  subtitle1: 'text-base font-medium text-gray-700',
  subtitle2: 'text-sm font-medium text-gray-600',
  body1: 'text-base text-gray-800',
  body2: 'text-sm text-gray-700',
  caption: 'text-xs text-gray-500'
}

export function Typography<T extends ElementType = 'p'>({
  as,
  variant = 'body1',
  children,
  className,
  ...rest
}: TypographyProps<T>) {
  const Component = as || defaultTagForVariant(variant)
  return (
    <Component className={clsx(variantClasses[variant], className)} {...rest}>
      {children}
    </Component>
  )
}

// Default mapping of variant → semantic tag
function defaultTagForVariant(variant: Variant): ElementType {
  switch (variant) {
    case 'h1':
      return 'h1'
    case 'h2':
      return 'h2'
    case 'h3':
      return 'h3'
    case 'h4':
      return 'h4'
    case 'h5':
      return 'h5'
    case 'h6':
      return 'h6'
    case 'subtitle1':
    case 'subtitle2':
      return 'h6'
    case 'caption':
      return 'span'
    default:
      return 'p'
  }
}
