<script setup lang="ts">
import { FwbAlert } from 'flowbite-vue'
import { storeToRefs } from 'pinia'
import { useParetoStore } from '@/stores/paretoStore'
import ParetoList from '@/components/TestTools/Pareto/ParetoList.vue'
import ParetoChart from '@/components/TestTools/Pareto/ParetoChart.vue'
import ParetoNuevo from '@/components/TestTools/Pareto/ParetoNuevo.vue'
// import { Chart } from 'canvasjs'

const { getIsParetoComplete } = storeToRefs(useParetoStore());

// TODO: checar que falta

// const n:Chart.prototype.chart.value = {
//
// }
</script>

<template>

  <section class="px-24 py-6">
    <section class="flex  flex-wrap p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
      <ParetoNuevo/>
      <ParetoList/>
    </section>
  </section>
</template>
