import type { Fortaleza, Oportunidad, Debilidad, Amenaza } from "@/types/Foda";

export interface Foda {
    // title: string;
    fortalezas: Fortaleza[];
    oportunidades: Oportunidad[];
    debilidades: Debilidad[];
    amenazas: Amenaza[];
}
