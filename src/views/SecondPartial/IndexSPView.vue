<script setup lang="ts">
import BackButton from '@/common/BackButton.vue';
import CardIndex from '@/components/CardIndex.vue';
</script>

<template>
  <BackButton />
  <main class="container mx-auto">
    <div class="flex flex-wrap items-center justify-center p-24">

      <CardIndex title="" color="bg-pink-500"
        imgSrc="https://marcaladiferencia.com/wp-content/uploads/2013/11/Outliers.jpg" routeName="outliers" />

      <CardIndex title="" color="bg-pink-500"
        imgSrc="https://images.justwatch.com/poster/307022732/s718/temporada-1.jpg" routeName="gigantsMX" />

    </div>
  </main>
</template>
