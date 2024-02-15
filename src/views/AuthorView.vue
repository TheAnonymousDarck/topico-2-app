<script setup lang="ts">
import BackButton from '@/common/BackButton.vue';
import { interestAuthor } from '@/assets/data/authorImg';

</script>
<template>
  <BackButton />

  <h1 class="mt-5 text-center text-bold">
    Autor
  </h1>
  <div class="flex items-center justify-center">
    <img src="/src/assets/img/author/file.jpg" alt="" class="rounded-xl" width="20%" height="20%">
  </div>


  <h1 class="mt-5 text-center text-bold">
    Un poco de mis gustos
  </h1>
  <div class="flex flex-wrap items-center justify-center mt-5 space-x-4 space-y-4">
    <img v-for="(inter, index) in  interestAuthor " :key="index" :src=inter.url :alt=inter.title class="pb-3 rounded-xl"
      width="20%" height="20%">
  </div>
</template>
<style scoped>
.container-personal-interest {
  @apply flex flex-col flex-wrap py-4;
}

.container-cards-personal-interest {
  @apply flex flex-wrap justify-center gap-3 pt-4;
}

.card-personal-interest {
  @apply w-28 h-28 text-white bg-indigo-500 border-spacing-3 flex flex-col items-center justify-center rounded-xl transition duration-150 ease-in-out hover:bg-indigo-600;
}
</style>