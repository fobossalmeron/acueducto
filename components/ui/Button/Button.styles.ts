import { ButtonProps } from './Button.types';

// Estilos base del botón
export const baseStyles = 'inline-flex items-center justify-center rounded-full relative transition-all duration-300 ease-in-out cursor-pointer';

// Estilos según la variante
export const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: 'bg-accent text-foreground hover:bg-accent/80 border border-[#4D75EA]',
    secondary: 'bg-background text-foreground border border-[#282B33] hover:bg-background/80 hover:border-background',
    outline: 'bg-accent/30 text-foreground border border-accent hover:bg-accent/20',
};

// Estilos según el tamaño
export const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
    default: 'text-lg py-4 px-6',
    small: 'text-base py-2 px-5',
}; 