<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BackButton from '@/common/BackButton.vue';

const props = defineProps({
    inactiveClass: {
        type: String,
        default: "group item-header-nav"
    },
    activeClass: {
        type: String,
        default: "group item-header-nav-active active",
    },
    visible: {
        type: Boolean,
        default: true,
    },
});

const tabs = [
    {
        route: 'home',
        icon: 'fa-solid fa-house',
        itemName: 'Inicio'
    },
    {
        route: 'infografias',
        icon: 'fa-solid fa-info',
        itemName: 'infografia'
    },
    {
        route: 'dinamica',
        icon: 'fa-solid fa-play',
        itemName: 'dinamica'
    },
    {
        route: 'evaluacion',
        icon: 'fa-solid fa-copy',
        itemName: 'evaluacion'
    },
    {
        route: 'autor',
        icon: 'fa-solid fa-user',
        itemName: 'autor'
    },
];

</script>
<template>
    <header>
        <BackButton />
        <!-- <div class="flex justify-center border-b border-gray-200 shadow-md dark:border-gray-700">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="me-2" v-for="(tab, index) in  tabs " :key="index">
                    <RouterLink :active-class="props.activeClass" :class="props.inactiveClass" :to="{ name: tab.route }">
                        <font-awesome-icon :icon="tab.icon" class="fa-icon-item-nav" />
                        {{ tab.itemName }}
                    </RouterLink>
                </li>
            </ul>
        </div> -->
    </header>
</template>
<style scoped>
.item-header-nav {
    @apply inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300;
}

.item-header-nav-active {
    @apply inline-flex items-center justify-center p-4 text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg dark:text-indigo-500 dark:border-indigo-500;
}

.fa-icon-item-nav {
    @apply w-4 h-4 text-indigo-600 me-2 dark:text-indigo-500;
}
</style>