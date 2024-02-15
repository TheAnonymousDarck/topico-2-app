<script setup lang="ts">
import { ref } from 'vue';
import { FwbButton, FwbCard } from 'flowbite-vue';
import TestForm from '@/components/TestView/TestForm.vue'
const show = ref<boolean>(true);
const canShow = () => show.value = !show.value;
</script>

<template>
  <div class="mt-5 text-center">
    Aqui no hay nada homs

    <br>
    <span class="text-indigo-500">
      Sigan viendo
    </span>

    <br>
    <FwbButton color="purple" @click="canShow" class="py-5">
      Mostrar
    </FwbButton>
  </div>
  <div class="flex items-center justify-center mt-5" v-show="show">

    <FwbCard class="w-full">
      <TestForm />
    </FwbCard>

  </div>
</template>
