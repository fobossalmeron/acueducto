import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de Tailwind de manera eficiente, evitando conflictos
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
} 