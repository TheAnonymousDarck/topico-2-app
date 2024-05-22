<template>
  <BackButton />
  <main class="container mx-auto">
    <div class="flex flex-wrap items-center justify-center p-24">

      <CardIndex title="" color="bg-pink-500"
                 :imgSrc=img[0] routeName="arquetipos" />

    </div>
  </main>
</template>
<script setup lang="ts">
import CardIndex from '@/components/CardIndex.vue'
import BackButton from '@/common/BackButton.vue'

const img: string[] = [
  'https://dazzet.co/wp-content/uploads/2023/10/395208b86a822ea0b7225cff24dd96e81974a9b8-800x800-1.jpg'
];
</script>