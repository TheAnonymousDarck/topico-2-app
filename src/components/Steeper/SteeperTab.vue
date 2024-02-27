<script setup lang="ts">
import type { SteeperTabProps } from '@/interfaces/Steeper';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<SteeperTabProps>();
</script>
<template>
    <div :class="`text-${color}-700 border-${color}-300 bg-${color}-50 dark:border-${color}-800 dark:text-${color}-400`"
        class="container-tab" role="alert">
        <div class="flex items-center justify-between">
            <span class="sr-only">{{ title }}</span>
            <h3 class="font-medium">{{ `${index} . ${title}` }}</h3>
            <FontAwesomeIcon :icon="icon" class="" />
        </div>
    </div>
</template>
<style scoped>
.container-tab {
    @apply w-full p-4 border rounded-lg dark:bg-gray-800;
}
</style>