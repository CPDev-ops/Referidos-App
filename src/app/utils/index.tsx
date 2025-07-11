import { RiArrowUpDownLine, RiArrowUpFill, RiArrowDownFill } from "react-icons/ri";
import type { SortState } from "../types";
import type { JSX } from "react";


export const parseAmount = (amount: number | string): string => {
    const num = typeof amount === 'string' ? parseFloat(amount) : amount;

    return new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);
};


// Función para formatear montos
export const formatCurrency = (value: number): string => {
    const absValue = Math.abs(value);
    const formatted = new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(absValue);

    return value < 0 ? `-$${formatted}` : `$${formatted}`;
};

// Función para determinar el color del monto
export const getAmountColor = (value: number): string => {
    if (value < 0) return 'text-[var(--accent-100)]';
    return 'text-[var(--text-100)]';
};

export const getSortIcon = <T,>(
    field: keyof T,
    sortState: SortState<T>
): JSX.Element => {
    if (sortState.sortField !== field)
        return <RiArrowUpDownLine size={14} className="ml-1 text-[var(--text-300)]" />;

    return sortState.sortOrder === 'asc'
        ? <RiArrowUpFill size={14} className="ml-1 text-[var(--bg-500)]" />
        : <RiArrowDownFill size={14} className="ml-1 text-[var(--accent-100)]" />;
};

export const formatCurrencyHome = (value: any) =>
    parseFloat(value).toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
    });




export const getStatusBadge = (detalle: string) => {
    const lower = detalle.toLowerCase()
    if (lower.includes("faltante")) {
        return <span className="px-2 py-1 text-xs  text-white bg-red-500 border border-gray-300  rounded-full">faltante</span>
    } else if (lower.includes("sobrante")) {
        return <span className="px-2 py-1 text-xs  text-green-800 border border-gray-300 bg-green-500/20 rounded-full">sobrante</span>
    }
    return <span className="px-2 py-1 text-xs  text-gray-700 bg-gray-200 border border-gray-300 rounded-full">{detalle}</span>
}
