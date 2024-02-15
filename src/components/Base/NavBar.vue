<script setup lang="ts">
import { RouterLink } from 'vue-router';


const props = defineProps({
    inactiveClass: {
        type: String,
        default: "group item-header-nav"
    },
    activeClass: {
        type: String,
        default: "group item-header-nav-active active",
    }
});

const pages = [
    {
        route: '/',
        icon: 'fa-solid fa-house',
        itemName: 'Inicio'
    },
    {
        route: '/first-partial',
        icon: 'fa-solid fa-1',
        itemName: 'parcial'
    },
    {
        route: '/second-partial',
        icon: 'fa-solid fa-2',
        itemName: 'parcial'
    },
    {
        route: '/autor',
        icon: 'fa-solid fa-user',
        itemName: 'autor'
    },
];
</script>
<template>
    <header>
        <nav
            class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tópico II</span>
                <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <!-- <button type="button"
                    class="px-4 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Get
                    started</button> -->
                    <!-- <button data-collapse-toggle="navbar-sticky" type="button"
                    class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button> -->
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li v-for="(page, index) in  pages " :key="index">
                            <RouterLink :active-class="props.activeClass" :class="props.inactiveClass" :to="page.route">
                                <font-awesome-icon :icon="page.icon" class="fa-icon-item-nav" />
                                {{ page.itemName }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
<style scoped>
.item-header-nav {
    /* @apply inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300; */
    @apply block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-700 md:p-0 md:dark:hover:text-indigo-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700;
}

.item-header-nav-active {
    @apply block py-2 px-3 text-white bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0 md:dark:text-indigo-500;
    /* @apply inline-flex items-center justify-center p-4 text-indigo-600 border-b-2 border-indigo-600 rounded-t-lg dark:text-indigo-500 dark:border-indigo-500; */
}

.fa-icon-item-nav {
    @apply w-4 h-4 text-indigo-600 me-2 dark:text-indigo-500;
}
</style>