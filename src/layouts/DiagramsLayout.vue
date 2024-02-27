<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from '@/components/Base/HeaderNav.vue'
</script>
<template>
    <HeaderNav />
    <main class="container mx-auto">
        <RouterView />
    </main>
</template>
<style scoped></style>