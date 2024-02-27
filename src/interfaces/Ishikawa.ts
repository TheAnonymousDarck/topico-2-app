export type Causa = string;
export type Efecto = string;

export interface Ishikawa {
    branches: Branch[],
    // causas: Causa[],
    // efectos: Efecto[],
}

export interface Branch{
    causa: Causa,
    efectos: Efecto[]
}