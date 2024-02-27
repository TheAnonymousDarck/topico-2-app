<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput, FwbListGroup, FwbListGroupItem, FwbButton, FwbAlert } from 'flowbite-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Fortaleza, Oportunidad, Debilidad, Amenaza } from '@/types/Foda';

const props = defineProps<{
}>();

</script>
<template>
  <div class="mt-2">
    List Ishikawa
  </div>
</template>