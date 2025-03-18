import { ButtonProps } from './Button.types';

// Estilos base del botón
export const baseStyles = 'inline-flex items-center justify-center rounded-full relative transition-all duration-300 ease-in-out cursor-pointer';

// Animación de destello para el botón primario
export const primaryButtonAnimation = 'hover:ring-1 hover:ring-[#4D75EA] hover:ring-offset-4 ring-offset-[#161E2C] hover:shadow-[0_0_18px_rgba(77,117,234,0.6)] focus:transition-[filter] focus:duration-200 focus:ease-out';

// Estilos para la variante skeumorph
export const secondaryButtonAnimation = 'hover:border-transparent hover:ring-1 hover:ring-[#4D75EA] hover:ring-offset-4 ring-offset-accent hover:shadow-[0_0_18px_rgba(26,49,142,1)] focus:transition-[filter] focus:duration-200 focus:ease-out';

// Estilos según la variante
export const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: `bg-accent border border-[#4D75EA] focus:brightness-110 active:brightness-110 ${primaryButtonAnimation}`,
    secondary: `bg-background border border-[#282B33] focus:brightness-125 active:brightness-125 ${secondaryButtonAnimation}`,
    outline: `bg-accent/30 border border-accent hover:bg-accent/20 focus:brightness-140 active:brightness-140 ${primaryButtonAnimation}`,
};

// Estilos según el tamaño
export const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
    default: 'text-md md:text-lg py-4 px-6',
    small: 'text-base py-3 px-5',
}; 