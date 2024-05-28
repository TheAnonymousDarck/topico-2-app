// import { useToolsDecisionsStore } from '@/stores/toolsDecisions';
// import { storeToRefs } from 'pinia';
// import type { Hat, Fortaleza, Oportunidad, Debilidad, Amenaza, Causa, Efecto, Cliente, Actor, Transformacion, Welstanchaung, Duenio, Ambiente, Fr, FrAcum } from '@/interfaces/Index'
//
// export const useToolsState = () => {
//
//     const store = useToolsDecisionsStore();
//
//     const {
//         foda,
//         ishikawa,
//         catwda,
//         pareto,
//         sixHats,
//         isFodaComplete,
//         isIshikawaComplete,
//         isParetoComplete,
//         isHatsComplete,
//         isCatwdaComplete,
//     } = storeToRefs(store);
//
//     const clearState = () => store.clearState();
//
//     const isComplete = (index: number): boolean => {
//         switch (index) {
//             case 0:
//                 return isFodaComplete.value;
//             case 1:
//                 return isIshikawaComplete.value;
//             case 2:
//                 return isCatwdaComplete.value;
//             case 3:
//                 return isHatsComplete.value;
//             case 4:
//                 return isParetoComplete.value;
//             default:
//                 return false;
//         }
//     }
//
//     const saveFoda = (title: string, fortalezas: Fortaleza[], oportunidades: Oportunidad[], debilidades: Debilidad[], amenazas: Amenaza[]) => {
//         store.saveFoda(title, fortalezas, oportunidades, debilidades, amenazas);
//     }
//
//     const saveIshikawa = (causas: Causa[], efectos: Efecto[]) => { store.saveIshikawa(causas, efectos); }
//
//     const saveCatwda = (clientes: Cliente[], actores: Actor[], transformacion: Transformacion[], welstanchaung: Welstanchaung[], duenios: Duenio[], ambientes: Ambiente[]) => {
//         store.saveCatwda(clientes, actores, transformacion, welstanchaung, duenios, ambientes);
//     }
//
//     const savePareto = (fr: Fr, frAcum: FrAcum, options: number[]) => {
//         store.savePareto(fr, frAcum, options);
//     }
//
//     const saveSixHats = (hats: Hat[]) => {
//         store.saveSixHats(hats);
//     }
//
//     return {
//         foda,
//         ishikawa,
//         catwda,
//         pareto,
//         sixHats,
//         isFodaComplete,
//         isIshikawaComplete,
//         isParetoComplete,
//         isHatsComplete,
//         isCatwdaComplete,
//
//         clearState,
//         isComplete,
//         saveFoda,
//         saveIshikawa,
//         saveCatwda,
//         savePareto,
//         saveSixHats,
//     };
// }