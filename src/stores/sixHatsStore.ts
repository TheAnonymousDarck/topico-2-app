import { defineStore } from 'pinia'
import type { Ishikawa, Causa, Efecto } from '@/interfaces/Index'

interface IshikawaState {
  ishikawa: Ishikawa | undefined;
  causas: Causa[];
  efectos: Efecto[];
  isIshikawaComplete: boolean,
}

export const useIshikawaStore = defineStore('Ishikawa', {
  state: (): IshikawaState => ({
    ishikawa: { causas: [], efectos: [] },
    causas: <Causa[]>[],
    efectos: <Efecto[]>[],
    isIshikawaComplete: false,
  }),
  getters: {
    getIshikawa: (state) => state.ishikawa,
    getIsIshikawaComplete: (state) => state.isIshikawaComplete,
  },
  actions: {
    clearState() {
      this.ishikawa = { causas: [], efectos: [] };
      this.causas = <Causa[]>[];
      this.efectos = <Efecto[]>[];
      this.isIshikawaComplete = false;
    },
    saveCausas(causas: Causa[]){
      this.ishikawa!.causas = causas;
    },
    saveEfectos(efectos: Efecto[]){
      this.ishikawa!.efectos = efectos;
    },
  },
  persist: true,
})
