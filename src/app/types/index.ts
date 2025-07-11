// type reutilizable para los props que manejan ordenamiento
export type SortState<T> = {
    sortField: keyof T;
    sortOrder: 'asc' | 'desc';
};



export interface Variacion {
    id: number
    usuario: string
    fecha: string
    empleado: string
    legajo: string
    detalle: string
    numeroVariacion: string
    tipoVariacion: string
    faltante: number | null
    sobrante: number | null
}
export interface User {
    legajo: string;
    nombre: string;
    usuario: string;
    permisos: string;
    fecha_registro: string;
}

export interface ModalData {
    type: ModalType | null
    data: Variacion | null
}
export type ModalType = "variacion" | "vale" | "editar" | "eliminar" | "agregar" | "agregar_usuario" | null

export interface ModalDataUsers {
    type: ModalUsersType | null;
    data: User | null
}

export type ModalUsersType = "agregar" | "eliminar" | "editar"