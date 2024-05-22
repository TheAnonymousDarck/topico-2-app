<script setup lang="ts">
import { ref } from 'vue'
import { FwbTab, FwbTabs } from 'flowbite-vue'
import { arqData } from '@/assets/data/ArqData'

const activeTab = ref('Compensación entre proceso y demora')

const handlePaneClick = () => { console.log('Click!') }
</script>
<template>
  <section class="px-12 pb-1 flex justify-center">
  <fwb-tabs @click:pane="handlePaneClick" v-model="activeTab" class="p-5">
    <fwb-tab v-for="(ar, index) in arqData" :key="index" :name="ar.title" :title="(index+1)" class="flex justify-end flex-row">
      <div class="flex flex-col gap-y-2">
        <h2 class="text-2xl"> {{ ar.title }}</h2>
        <p> <strong>descripción:</strong> {{ ar.description}}</p>
        <p> <strong>Principio Administrativo:</strong> {{ ar.prAd}}</p>
        <p> <strong>Sintoma de advertencia:</strong> {{ ar.sinAdv}}</p>
        <img :src="`/src/assets/img/arq${ar.img}`" alt="lt">
      </div>
    </fwb-tab>
  </fwb-tabs>
  </section>
</template>