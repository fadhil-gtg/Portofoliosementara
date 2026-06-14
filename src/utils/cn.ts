// src/utils/cn.ts
import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with clsx and twMerge
 * Automatically resolves conflicting Tailwind utilities
 * 
 * @example
 * cn('p-2 bg-red-500', 'p-4') // Result: 'p-4 bg-red-500'
 * cn('px-2', { 'px-4': true }) // Result: 'px-4'
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
