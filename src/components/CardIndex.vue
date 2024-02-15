<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps({
    title: {
        type: String,
        required: true
    },
    routeName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    imgSrc: {
        type: String,
        required: true
    },
});

// const classes = `cardIndex ${color}`;
</script>
<template>
    <RouterLink :to="{ name: routeName }">
        <div class='cardIndex' :class="color">
            <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none"
                style="transform: scale(1.5); opacity: 0.1;">
                <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
            </svg>
            <div class="relative flex items-center justify-center px-10 pt-10">
                <div class="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"
                    style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;">
                </div>
                <img class="relative w-40" :src="imgSrc" :alt="title">
            </div>
            <div class="relative px-6 pb-6 mt-6 text-white">
                <div class="text-center">
                    <span class="block text-xl font-semibold">
                        {{ title }}
                    </span>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
<style scoped>
.cardIndex {
    @apply relative flex-shrink-0 max-w-xs m-6 overflow-hidden rounded-lg shadow-lg;
}
</style>