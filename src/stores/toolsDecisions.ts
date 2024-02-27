import { defineStore } from 'pinia'
import type { Foda, Catwuda, Pareto, SixHats, Ishikawa } from '@/interfaces/Index'

interface AllToolsState {
  problem: string,
  foda: Foda | undefined,
  ishikawa: Ishikawa | undefined,
  catwda: Catwuda | undefined,
  pareto: Pareto | undefined,
  sixHats: SixHats | undefined,
}

export const useToolsDecisionsStore = defineStore('toolsDecisions', {
  state: (): AllToolsState => ({
    problem: '',
    foda: undefined,
    ishikawa: undefined,
    catwda: undefined,
    pareto: undefined,
    sixHats: undefined,
  }),
  getters: {
    getProblem: (state) => state.problem,
  },
  actions: {
    clearState() {
      this.problem = '';
      this.foda = undefined;
      this.ishikawa = undefined;
      this.catwda = undefined;
      this.pareto = undefined;
      this.sixHats = undefined;
    },
    saveProblem(problem: string){
      this.problem = problem;
    },
    saveFoda(foda: Foda){
      this.foda = foda;
    },
    saveIshikawa(ishikawa: Ishikawa){
      this.ishikawa = ishikawa;
    },
    saveCatwda(catwda: Catwuda){
      this.catwda = catwda;
    },
    savePareto(pareto: Pareto) {
      this.pareto = pareto;
    },
    saveSixHats(hats: SixHats){
      this.sixHats = hats;
    }
  },
  persist: true,
})
