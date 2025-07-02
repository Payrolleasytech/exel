import React from 'react'
import clsx from 'clsx'

interface SubtitleProps {
    children: React.ReactNode,
    className?: string
}
export default function SubTitle({children, className}:SubtitleProps) {
  return (
    <p className={clsx(' font-family-heading text text-[#21272A] font-normal text-lg md:text-xl 2xl:text-2xl', className )}>
        {children}
    </p>
  )
}
