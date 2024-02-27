/*
* @type Frecuencia Relativa
*/
export type Fr = string;

/*
* @type Frecuencia Relativa Acumulada
*/
export type FrAcum = string;

export interface Pareto {
    fr: Fr;
    frAcum: FrAcum;
    options: number[];
}