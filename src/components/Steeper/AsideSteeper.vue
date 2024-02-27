<script setup lang="ts">
import { ref } from 'vue';
import SteeperTab from '@/components/Steeper/SteeperTab.vue';
import type { SteeperTabs } from '@/interfaces/Steeper';
import FodaTest from '../TestTools/FodaTest.vue';
import ParetoTest from '../TestTools/ParetoTest.vue';
import IshikawaTest from '../TestTools/IshikawaTest.vue';
import HatsTest from '../TestTools/HatsTest.vue';
import CatwdaTest from '../TestTools/CatwdaTest.vue';
import { useGetTools } from '@/composables/useGetTools'

defineProps<{
    tabs: SteeperTabs[],
}>();

const currentTabIndex = ref<number>(0);
const { isComplete } = useGetTools();

const getTabColor = (index: number): string => {
  if (currentTabIndex.value === index) {
    return 'blue';
  } else if (isComplete(index)) {
    return 'green';
  } else {
    return 'gray';
  }
};

const getTabIcon = (index: number): string => {
  if (currentTabIndex.value === index) {
    return 'fa-solid fa-arrow-right';
  } else if (isComplete(index)) {
    return 'fa-solid fa-check';
  } else {
    return 'fa-solid fa-exclamation-circle';
  }
};

</script>
<template>
    <div class="flex">
        <ol class="mt-5 space-y-4 w-72">
            <li v-for="(tab, index) in tabs" :key="index" @click="currentTabIndex = index">
                <SteeperTab :index="index + 1" :title="tab.title"
                            :color="getTabColor(index)"
                            :icon="getTabIcon(index)"
                            />
<!--                    :color="currentTabIndex === index ? 'blue' : (isComplete(index) ? 'green' : 'gray')"-->
<!--                    :icon="currentTabIndex === index ? 'fa-solid fa-arrow-right' : (isComplete(index) ? 'fa-solid fa-check' : 'fa-solid fa-exclamation-circle')" />-->
            </li>
        </ol>

        <div class="w-full p-4 ">
            <FodaTest v-if="currentTabIndex === 0" />
            <IshikawaTest v-else-if="currentTabIndex === 1" />
            <CatwdaTest v-else-if="currentTabIndex === 2" />
            <HatsTest v-else-if="currentTabIndex === 3" />
            <ParetoTest v-else-if="currentTabIndex === 4" />
        </div>
    </div>
</template>
<style scoped></style>