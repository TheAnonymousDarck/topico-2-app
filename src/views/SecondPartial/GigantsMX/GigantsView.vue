<script setup lang="ts">
import { ref } from 'vue';
import ImgSS4 from '@/components/GigantsMX/ImgSS4.vue';
import TableData from '@/components/GigantsMX/TableData.vue';
import { FwbButton } from 'flowbite-vue';


const show = ref(false);

const canShow = () => show.value = !show.value;

</script>
<template>
    <section class="px-12 pb-3">
        <div class="flex flex-col flex-wrap items-center w-full p-3 mt-2 shadow-md bg-slate-200 rounded-xl">
            <div class="flex justify-between w-full">
                <span></span>
                <span
                    class="inline-block font-bold text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-indigo-400 bg-clip-text">
                    El super empresario exitoso fase 4
                </span>
                <FwbButton @click="canShow()" class="mb-4">Cambiar</FwbButton>
            </div>

            <ImgSS4 v-if="!show" />
            <TableData v-else />
        </div>
    </section>
</template>
<style scoped></style>