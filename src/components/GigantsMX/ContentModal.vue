<script setup lang="ts">
import { ref } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue';


interface ModalContent {
    title: string;
    text: string;
}

defineProps<{
    modalContent: {
        type: ModalContent,
        required: true
    }
}>();

defineEmits(
    () => 'closeModal'
);
</script>
<template>
    <FwbModal @close="closeModal">
        <template #header>
            <div class="flex items-center text-lg">
                {{ modalContent.title }}
            </div>
        </template>
        <template #body>
            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-500">
                {{ modalContent.text }}
            </p>
        </template>
        <template #footer>
            <div class="flex justify-between">
                <FwbButton @click="closeModal" color="green">
                    I accept
                </FwbButton>
            </div>
        </template>
    </FwbModal>
</template>