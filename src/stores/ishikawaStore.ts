import { defineStore } from 'pinia'
import type { Catwuda, Cliente, Actor, Transformacion, Welstanchaung, Duenio, Ambiente } from '@/interfaces/Index'

interface CatwdaState {
  catwda: Catwuda | undefined;
  clientes: Cliente[]
  actores:Actor[]
  transformacion: Transformacion[]
  welstanchaung: Welstanchaung[]
  duenios: Duenio[]
  ambientes: Ambiente[]
  isCatwdaComplete: boolean,
}

export const useFodaStore = defineStore('Catwda', {
  state: (): CatwdaState => ({
    catwda: { clientes: [], actores: [], transformacion: [], welstanchaung: [], duenios: [], ambientes: [] },
    clientes: <Cliente[]>[],
    actores:<Actor[]>[],
    transformacion: <Transformacion[]>[],
    welstanchaung: <Welstanchaung[]>[],
    duenios:<Duenio[]>[],
    ambientes: <Ambiente[]>[],
    isCatwdaComplete: false,
  }),
  getters: {
    getCatwda: (state) => state.catwda,
    getIsCatwdaComplete: (state) => state.isCatwdaComplete,
  },
  actions: {
    clearState() {
      this.catwda = { clientes: [], actores: [], transformacion: [], welstanchaung: [], duenios: [], ambientes: [] };
      this.clientes = <Cliente[]>[];
      this.actores = <Actor[]>[];
      this.transformacion = <Transformacion[]>[];
      this.welstanchaung = <Welstanchaung[]>[];
      this.duenios = <Duenio[]>[];
      this.ambientes = <Ambiente[]>[];
      this.isCatwdaComplete = false;
    },
    saveC(clientes: Cliente[]){
      this.catwda!.clientes = clientes;
    },
    saveA(actores: Actor[]){
      this.catwda!.actores = actores;
    },
    saveT(transformacion: Transformacion[]){
      this.catwda!.transformacion = transformacion;
    },
    saveW(welstanchaung: Welstanchaung[]){
      this.catwda!.welstanchaung = welstanchaung;
    },
    saveD(duenios: Duenio[]){
      this.catwda!.duenios = duenios;
    },
    saveAFinal(ambientes: Ambiente[]){
      this.catwda!.ambientes = ambientes;
    },
  },
  persist: true,
})
