import { ButtonProps } from './Button.types';

// Estilos base del botón
export const baseStyles = 'inline-flex items-center justify-center rounded-full relative transition-all duration-300 ease-in-out cursor-pointer touch-manipulation select-none [text-size-adjust:none] [-webkit-text-size-adjust:none] [touch-action:manipulation] [-webkit-tap-highlight-color:transparent] before:absolute before:inset-[-6px] before:rounded-full before:transition-all before:duration-300 before:opacity-0 before:border before:border-[#4D75EA] before:scale-95';

// Animación de destello para el botón primario
export const primaryButtonAnimation = 'hover:shadow-[0_0_18px_rgba(77,117,234,0.6)] hover:before:opacity-100 hover:before:scale-100 active:shadow-[0_0_18px_rgba(77,117,234,0.6)] active:before:opacity-100 active:before:scale-100';

// Estilos para la variante skeumorph
export const secondaryButtonAnimation = 'hover:shadow-[0_0_18px_rgba(26,49,142,1)] hover:before:opacity-100 hover:before:scale-100 active:before:opacity-100 active:before:scale-100 before:absolute before:inset-[-6px] before:rounded-full before:transition-all before:duration-300 before:opacity-0 before:border before:border-[#4D75EA] before:scale-95';

// Estilos según la variante
export const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary: `bg-accent border border-[#4D75EA] ${primaryButtonAnimation}`,
    secondary: `bg-background border border-[#363A45] ${secondaryButtonAnimation}`,
    outline: `bg-accent/30 border border-accent hover:bg-[accent/20] ${primaryButtonAnimation}`,
};

// Estilos según el tamaño
export const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
    default: 'text-sm sm:text-base py-4 px-6',
    small: 'text-base py-3 px-5',
}; 