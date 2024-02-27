export type Cliente = string;
export type Actor = string;
export type Transformacion = string;
export type Welstanchaung = string;
export type Duenio = string;
export type Ambiente = string;


export interface Catwuda {
    clientes: Cliente[]
    actores: Actor[]
    transformacion: Transformacion[]
    welstanchaung: Welstanchaung[]
    duenios: Duenio[]
    ambientes: Ambiente[]
}