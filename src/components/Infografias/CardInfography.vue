<script setup lang="ts">
import { FwbButton } from 'flowbite-vue'
// import { VuePDF, usePDF } from '@tato30/vue-pdf'
// import type { ProgressPDF } from '@/interfaces/ProgressPDF';
import router from '../../router/index';

const props = defineProps({
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    pdfName: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
});


// function onProgress({ loaded, total }: ProgressPDF): void {
//     const percentage: number = (loaded / total) * 100;
//     console.log(`${percentage}% Loaded`);
// }

// function onError(reason: string): void {
//     console.error(`PDF loading error: ${reason}`)
// }

// const { pdf, pages, info } = usePDF(`'/src/assets/pdf/${props.pdfName}`, {
//     onProgress,
//     onError
// });


function downloadPDF(pdfName: string) {
    console.log('sedescarga', pdfName);
}

function viewPDF(pdfName: string) {
    console.log('ver ', pdfName);
    router.push();

}
</script>
<template>
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="p-8 rounded-t-lg" :src="props.img" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {{ props.title }}
            </h3>
            <div class="flex items-center justify-between pt-5">
                <!-- <fwb-button color="green" @click="viewPDF(props.pdfName)">Ver Infografia</fwb-button>
                <fwb-button color="purple" @click="downloadPDF(props.pdfName)">Descargar</fwb-button> -->
                <!-- <fwb-button color="green" disabled>Ver Infografia</fwb-button> -->
                <a class="btnG" :href="link" target="_blank">Ver</a>
                <fwb-button color="purple" disabled>Descargar</fwb-button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.btnG {
    @apply p-1 px-3 text-center focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700;
}
</style>