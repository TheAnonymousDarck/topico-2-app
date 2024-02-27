import { defineStore } from 'pinia'
import type { SixHats, Hat } from '@/interfaces/Index'

interface SixHatsState {
  sixHats: SixHats | undefined;
  hat: Hat | undefined;
  isSixHatsComplete: boolean;
}

export const useSixHatsStore = defineStore('SixHats', {
  state: (): SixHatsState => ({
    sixHats: { hats:[] },
    hat: undefined,
    isSixHatsComplete: true,
  }),
  getters: {
    getSixHats: (state) => state.sixHats,
    getIsSixHatsComplete: (state) => state.isSixHatsComplete,
  },
  actions: {
    clearState() {
      this.sixHats = { hats:[] };
      this.isSixHatsComplete = false;
    },
    saveHat(hat: Hat){
      this.sixHats?.hats.push(hat);
    },
    // saveEfectos(efectos: Efecto[]){
    //   this.ishikawa!.efectos = efectos;
    // },
  },
  persist: true,
})
