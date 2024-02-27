import { storeToRefs } from 'pinia';
import { useSixHatsStore } from '@/stores/sixHatsStore'
import { useCatwdaStore } from '@/stores/catwdaStore'
import { useFodaStore } from '@/stores/fodaStore'
import { useParetoStore } from '@/stores/paretoStore'
import { useIshikawaStore } from '@/stores/ishikawaStore'
import type { ComputedRef } from 'vue'

export const useGetTools = () => {

  const { getCatwda, getIsCatwdaComplete } = storeToRefs( useCatwdaStore() );
  const { getFoda, getIsFodaComplete } = storeToRefs( useFodaStore() );
  const { getIshikawa, getIsIshikawaComplete } = storeToRefs( useIshikawaStore() );
  const { getSixHats, getIsSixHatsComplete } = storeToRefs( useSixHatsStore() );
  const { getPareto, getIsParetoComplete } = storeToRefs( useParetoStore() );


  // const { getCatwda, getFoda, getPareto, getSixHats, getIshikawa } = useGetTools();

  const isComplete = (index: number): ComputedRef<boolean> | boolean => {
    switch (index) {
      case 0:
        return getIsFodaComplete;
      case 1:
        return getIsIshikawaComplete;
      case 2:
        return getIsCatwdaComplete;
      case 3:
        return getIsSixHatsComplete;
      case 4:
        return getIsParetoComplete;
      default:
        return false;
    }
  }


  return {
    getCatwda, getIsCatwdaComplete,
    getFoda, getIsFodaComplete,
    getIshikawa, getIsIshikawaComplete,
    getSixHats, getIsSixHatsComplete,
    getPareto, getIsParetoComplete,

    isComplete
  }

}