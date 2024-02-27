<template>
    <fieldset class="containerClasses">
        <legend class="legend">

            <button @click="show = !show">
                <FontAwesomeIcon v-if="show" icon="fa-solid fa-xmark" class="text-red-400" size="xl" />
                <FontAwesomeIcon v-else icon="fa-solid fa-arrow-down" class="text-blue-400" size="xl" />
            </button>
            {{ legend }}
        </legend>

        <transition-group name="fade" key="slot">
          <slot v-if="show"></slot>
        </transition-group>

    </fieldset>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { FieldSetProps } from '@/interfaces/FieldSetProps';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps<FieldSetProps>();
const show = ref(true);


</script>
<style scoped>
.containerClasses {
    @apply border border-slate-400 rounded-md p-4;
}

.legend {
    @apply mb-2 text-lg font-medium;
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>