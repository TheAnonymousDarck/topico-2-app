<script setup lang="ts">
import { provide } from 'vue'
import { RouterView } from 'vue-router';

// const titleProblematic = ref<string>('');

provide("titleProblematic", '');
</script>

<template>
  <RouterView />
  <!-- <GuestLayout /> -->
</template>

<style scoped></style>