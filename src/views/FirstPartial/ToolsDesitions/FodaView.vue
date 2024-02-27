<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useFodaStore } from '@/stores/fodaStore'
import FieldSet from '@/common/FieldSet.vue';
import ListFoda from '@/components/TestTools/FODA/ListFoda.vue'
import { FwbAlert } from 'flowbite-vue'

const { fortalezas, oportunidades, debilidades, amenazas, getIsFodaComplete } =  storeToRefs(useFodaStore());
</script>

<template>

  <section class="px-24 py-12">
    <section class="flex flex-wrap p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
      <FwbAlert icon border type="info" v-if="!getIsFodaComplete" class="w-full">
        No hay ningun registro
      </FwbAlert>
      <div class="text-center w-full mb-2">
        <span class="text-red-500 font-semibold text-2xl indent-8"> Problematica: </span>
        <span class="leading-relaxed text-lg"> ¿Porque un jr no encuentra trabajo despues de salir de la universidad?  </span>

      </div>
      <div class="flex flex-row w-1/2 pr-2">
        <FieldSet legend="Fortalezas" :toggleable="true" class="w-full">
          <ListFoda :list-item="fortalezas"/>
        </FieldSet>
      </div>
      <div class="flex flex-row w-1/2">
        <FieldSet legend="Oportunidades" :toggleable="true" class="w-full">
          <ListFoda :list-item="oportunidades"/>
        </FieldSet>
      </div>

      <div class="flex flex-row w-1/2 pr-2 mt-5">
        <FieldSet legend="Debilidades" :toggleable="true" class="w-full">
          <ListFoda :list-item="debilidades"/>
        </FieldSet>
      </div>
      <div class="flex flex-row w-1/2 mt-5">
        <FieldSet legend="Amenazas" :toggleable="true" class="w-full">
          <ListFoda :list-item="amenazas"/>
        </FieldSet>
      </div>

    </section>
  </section>
</template>
