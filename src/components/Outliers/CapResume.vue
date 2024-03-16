<script setup lang="ts">
import type { CapsRes } from '@/assets/data/capFueraSerie';

const props = defineProps<{
    cap: CapsRes
}>();
</script>

<template>

    <div class="p-3 antialiased text-center rounded-lg shadow-2xl mx-44 border-amber-400 opacity-90 bg-amber-50">
        <span class="font-bold">Capitulo {{ props.cap.numberCap }} .- {{ props.cap.title }}</span> <br>
        <span class="italic font-semibold">{{ props.cap.phrase }}</span> <br> <br>
        <div v-for="(resume, index) in props.cap.capResume" :key="index">
            <p class="px-5 mb-3 font-medium text-justify text-pretty">{{ resume }}</p>
        </div>

        <span class="font-bold">
            Conclusión:
        </span>

        <p class="px-5 font-medium text-justify text-pretty">
            {{ props.cap.conclusion }}
        </p>
    </div>

</template>

<style scoped></style>