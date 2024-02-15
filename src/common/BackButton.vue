<script setup lang="ts">
import router from '@/router/index';
import { FwbButton } from 'flowbite-vue';

function goBack() {
    router.back();
}
</script>
<template>
    <div class="container flex justify-start pt-5 pl-2 mx-auto">
        <FwbButton color="green" @click="goBack()">
            Regresar
        </FwbButton>
    </div>
</template>
<style scoped></style>