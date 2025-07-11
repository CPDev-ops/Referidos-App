import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string; // Si querés pasar texto directamente
    className?: string; // Para clases personalizadas (Tailwind o CSS)
    iconLeft?: React.ReactNode; // Para ícono a la izquierda
    iconRight?: React.ReactNode; // Para ícono a la derecha
}

const Button: React.FC<ButtonProps> = ({
    text,
    className = "bg-white/10 hover:bg-white/20 text-white",
    iconLeft,
    iconRight,
    children,
    ...props
}) => {
    return (
        <button
            className={`inline-flex  items-center text-center gap-2 justify-center px-4 py-2 rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
            {...props}
        >
            {iconLeft && <span>{iconLeft}</span>}
            {text || children}
            {iconRight && <span>{iconRight}</span>}
        </button>
    );
};

export default Button;
