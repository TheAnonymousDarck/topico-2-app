<template>
  <BackButton />
  <main class="container mx-auto">
    <div class="flex flex-wrap items-center justify-center p-24">

      <CardIndex title="Arquetipos" color="bg-teal-500"
                 :imgSrc=img[0] routeName="arquetipos" />

      <CardIndex title="la 5ta disciplina" color="bg-orange-500"
                 :imgSrc=img[1] routeName="qdisc" />

      <CardIndex title="super competencias" color="bg-violet-500"
                 :imgSrc=img[2] routeName="super-competencias" />

      <CardIndex title="Negociación" color="bg-blue-500"
                 :imgSrc=img[3] routeName="nego" />
    </div>
  </main>
</template>
<script setup lang="ts">
import CardIndex from '@/components/CardIndex.vue'
import BackButton from '@/common/BackButton.vue'

const img: string[] = [
  'https://cdn-icons-png.flaticon.com/512/10993/10993536.png',
  'https://cdn-icons-png.flaticon.com/512/5998/5998740.png',
  'https://cdn-icons-png.flaticon.com/512/2631/2631384.png',
  'https://cdn-icons-png.flaticon.com/512/7406/7406971.png',
];
</script>