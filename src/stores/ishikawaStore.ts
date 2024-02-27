import { defineStore } from 'pinia'
import type { Ishikawa, Causa, Efecto, Branch } from '@/interfaces/Index'

interface IshikawaState {
  ishikawa: Ishikawa | undefined;
  branch: Branch;
  causa: Causa;
  causas: Causa[];
  efectos: Efecto[];
  isIshikawaComplete: boolean,
}

export const useIshikawaStore = defineStore('Ishikawa', {
  state: (): IshikawaState => ({
    ishikawa: { branches: <Branch[]>[] },
    branch: { causa: <Causa>'', efectos: <Efecto[]>[] },
    causa: <Causa>'',
    causas: <Causa[]>[],
    efectos: <Efecto[]>[],
    isIshikawaComplete: false,
  }),
  getters: {
    getIshikawa: (state): Ishikawa | undefined => state.ishikawa,
    getIsIshikawaComplete: (state) => state.isIshikawaComplete,
  },
  actions: {
    clearState() {
      this.ishikawa = { branches: <Branch[]>[] };
      this.branch = { causa: <Causa>'', efectos: <Efecto[]>[] };
      this.causa = <Causa>'';
      this.efectos = <Efecto[]>[];
      this.isIshikawaComplete = false;
    },
    saveBranch(causa: Causa, efectos: Efecto[]){
      this.branch.causa = causa;
      this.branch.efectos = efectos;
    },
    addBranch(causa: Causa, efectos: Efecto[]){
      this.ishikawa?.branches.push({ causa, efectos });
      },
    saveCausas(causas: Causa[]){
      console.log(causas);
    },
    saveEfectos(efectos: Efecto[]) {
      console.log(efectos);
    }
  },
  persist: true,
})
