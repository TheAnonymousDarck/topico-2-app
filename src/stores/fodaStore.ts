import { defineStore } from 'pinia'
import type { Foda, Fortaleza, Oportunidad, Debilidad, Amenaza, } from '@/interfaces/Index'

interface FodaState {
  foda: Foda | undefined,
  fortalezas: Fortaleza[],
  oportunidades: Oportunidad[],
  debilidades: Debilidad[],
  amenazas: Amenaza[],
  isFodaComplete: boolean,
}

export const useFodaStore = defineStore('Foda', {
  state: (): FodaState => ({
    foda: { fortalezas: [], oportunidades: [], debilidades: [], amenazas: [] },
    fortalezas: <Fortaleza[]>[],
    oportunidades: <Oportunidad[]>[],
    debilidades: <Debilidad[]>[],
    amenazas: <Amenaza[]>[],
    isFodaComplete: false,
  }),
  getters: {
    getFoda: (state) => state.foda,
    getIsFodaComplete: (state) => state.isFodaComplete,
  },
  actions: {
    clearState() {
      this.foda = {fortalezas: [], oportunidades: [], debilidades: [], amenazas: []};
      this.fortalezas = <Fortaleza[]>[];
      this.oportunidades = <Oportunidad[]>[];
      this.debilidades = <Debilidad[]>[];
      this.amenazas = <Amenaza[]>[];
      this.isFodaComplete = false;
    },
    saveF(fortalezas: Fortaleza[]){
      this.foda!.fortalezas = fortalezas;
    },
    saveO(oportunidades: Oportunidad[]){
      this.foda!.oportunidades = oportunidades;
    },
    saveD(debilidades: Debilidad[]){
      this.foda!.debilidades = debilidades;
    },
    saveA(amenazas: Amenaza[]){
      this.foda!.amenazas = amenazas;
    },
  },
  persist: true,
})
