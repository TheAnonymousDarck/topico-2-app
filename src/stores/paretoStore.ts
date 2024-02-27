import { defineStore } from 'pinia'
import type { Pareto, Fr, FrAcum, } from '@/interfaces/Index'

interface ParetoState {
  pareto: Pareto | undefined;
  fr: Fr;
  frAcum: FrAcum;
  options: number[];
  qy1: number,
  qy2: number,
  qy3: number,
  qy4: number,
  qy5: number,
  isParetoComplete: boolean,
}

export const useParetoStore = defineStore('Pareto', {
  state: (): ParetoState => ({
    pareto: { fr: '', frAcum: '', options: [] },
    fr: <Fr>'',
    frAcum: <FrAcum>'',
    options: <number[]>[],
    qy1: 80,
    qy2: 90,
    qy3: 23,
    qy4: 50,
    qy5: 56,
    isParetoComplete: false,
  }),
  getters: {
    getPareto: (state) => state.pareto,
    getIsParetoComplete: (state) => state.isParetoComplete,
  },
  actions: {
    clearState() {
      this.pareto = { fr: '', frAcum: '', options: [] };
      this.fr = <Fr>'';
      this.frAcum = <FrAcum>'';
      this.isParetoComplete = false;
    },
    saveFrs(fr: Fr){
      this.pareto!.fr = fr;
    },
    saveFrAcums(frAcum: FrAcum){
      this.pareto!.frAcum = frAcum;
    },
    saveOptions(options: number[]){
      this.pareto!.options = options;
    },
    saveQ1(q: number){
      this.qy1 = q;
    },
    saveQ2(q: number){
      this.qy2 = q;
    },
    saveQ3(q: number){
      this.qy3 = q;
    },
    saveQ4(q: number){
      this.qy4 = q;
    },
    saveQ5(q: number){
      this.qy5 = q;
    },
  },
  persist: true,
})
