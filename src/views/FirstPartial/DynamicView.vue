<script setup lang="ts">
import { ref } from 'vue';
import { FwbButton } from 'flowbite-vue';

const showRes = ref<boolean>(true);

function change() {
  return showRes.value = !showRes.value;
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-center px-24 mt-5">
    <FwbButton color="green" @click="change">
      {{ showRes ? 'Ver respuestas' : 'Ocultar respuestas' }}
    </FwbButton>
  </div>

  <div class="flex flex-wrap items-center justify-center px-24 mt-5" v-show="showRes">
    <img width="50%" height="50%" src="/src/assets/img/actividad/soup.png" alt="activity">
  </div>

  <div v-show="!showRes" class="flex flex-wrap items-center justify-center px-24 mt-5">
    <img width="50%" height="50%" src="/src/assets/img/actividad/soup_res.png" alt="activity">

  </div>
</template>
