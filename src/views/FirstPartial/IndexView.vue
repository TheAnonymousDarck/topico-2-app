<script setup lang="ts">
import BackButton from '@/common/BackButton.vue';
import CardIndex from '@/components/CardIndex.vue';
</script>

<template>
  <BackButton />
  <main class="container mx-auto">
    <div class="flex flex-wrap items-center justify-center p-24">

      <CardIndex title="Infografias" color="bg-orange-500" imgSrc="https://cdn-icons-png.flaticon.com/128/741/741894.png"
        routeName="infografias" />

      <CardIndex title="Dinamica" color="bg-teal-500" imgSrc="https://cdn-icons-png.flaticon.com/512/6556/6556371.png"
        routeName="dinamica" />

      <CardIndex title="Evaluacion" color="bg-purple-500" imgSrc="https://cdn-icons-png.flaticon.com/512/6014/6014308.png"
        routeName="evaluacion" />

      <CardIndex title="Diagramas" color="bg-emerald-500" imgSrc="https://cdn-icons-png.flaticon.com/512/2145/2145569.png"
        routeName="first-partial-diagrams" />

    </div>
  </main>
</template>
