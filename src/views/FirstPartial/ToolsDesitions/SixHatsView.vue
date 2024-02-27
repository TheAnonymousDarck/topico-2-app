<script setup lang="ts">
import { FwbAlert } from 'flowbite-vue'
import { storeToRefs } from 'pinia'
import { useSixHatsStore } from '@/stores/sixHatsStore'
import HatColorReadOnly from '@/components/TestTools/SixHats/HatColorReadOnly.vue'

const { getIsSixHatsComplete, getSixHats } =  storeToRefs(useSixHatsStore());
</script>

<template>

  <section class="px-24 py-6">
    <section class="flex  flex-wrap p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
<!--      <FwbAlert icon border type="info" v-if="!getIsSixHatsComplete" class="w-full">-->
<!--        No hay ningun registro-->
<!--      </FwbAlert>-->
      <div class="mt-2 w-full">
        <div class="grid grid-cols-3 gap-2">
          <HatColorReadOnly
            v-for="(hat, index) in getSixHats?.hats" :key="index"
            :hat="hat"/>
        </div>

      </div>
    </section>
  </section>
</template>
