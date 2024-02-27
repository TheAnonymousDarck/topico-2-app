<script setup lang="ts">
import { provide, ref } from 'vue'
import { RouterView } from 'vue-router';
import GuestLayout from './layouts/GuestLayout.vue';

// const titleProblematic = ref<string>('');

provide("titleProblematic", '');
</script>

<template>
  <RouterView />
  <!-- <GuestLayout /> -->
</template>

<style scoped></style>