<script setup lang="ts">
import { ref } from 'vue'
import AsideSteeper from '@/components/Steeper/AsideSteeper.vue'
import type { SteeperTabs } from '@/interfaces/Steeper';
// import SteeperTitle from '@/components/Steeper/SteeperTitle.vue'

const steeperTab = ref<SteeperTabs[]>([
    { title: 'FODA', },
    { title: 'Ishikawa', },
    { title: 'CATWDA', },
    { title: 'Seis Sombreros para pensar', },
    { title: 'Pareto', },
]);

</script>
<template>
  <section class="px-24 py-6">
    <section class=" p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
<!--      <SteeperTitle  />-->
      <span class="text-red-500 font-semibold text-2xl indent-8"> Problematica: </span>
      <span class="leading-relaxed text-lg"> ¿Porque un jr no encuentra trabajo despues de salir de la universidad?  </span>

<!--    <section class="px-2 py-4 mt-5 rounded-lg shadow-lg bg-slate-200">-->
        <AsideSteeper :tabs="steeperTab" />
    </section>
  </section>
</template>
<style scoped></style>