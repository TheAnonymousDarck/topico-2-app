<script setup lang="ts">
import { ref } from 'vue';
import { FwbTab, FwbTabs } from 'flowbite-vue';
import CapResume from '@/components/Outliers/CapResume.vue'
import type { CapsRes } from '@/assets/data/capFueraSerie';
import { capitulosRes } from '@/assets/data/capFueraSerie';
import ActivitySection from '@/components/Outliers/ActivitySection.vue';


const caps = ref<CapsRes[]>(capitulosRes)
const activeTab = ref('cap 1');
// const activeTab = ref('activity');

</script>

<template>
    <section class="px-12 pb-1">
        <!-- <FwbButton>Hoola</FwbButton> -->

        <div class="flex flex-col flex-wrap items-center w-full p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
            <FwbTabs v-model="activeTab" variant="underline" class="flex content-center justify-center px-3 py-3">

                <FwbTab :name="`cap ${cap.numberCap}`" :title="`capitulo ${cap.numberCap}`" v-for="(cap, index) in caps"
                    :key="index">
                    <CapResume :cap="cap" />
                </FwbTab>

<!--              <FwbTab name="activity" title="Actividad">-->
                <FwbTab name="activity" title="Preguntas">
                    <ActivitySection />
                </FwbTab>
            </FwbTabs>
        </div>
    </section>
</template>

<style scoped></style>