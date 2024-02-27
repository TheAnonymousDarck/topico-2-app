<script setup lang="ts">
import { FwbAlert } from 'flowbite-vue'
import { storeToRefs } from 'pinia'
import { useIshikawaStore } from '@/stores/ishikawaStore'
import ListIshikawa from '@/components/TestTools/Ishikawa/ListIshikawa.vue'
import {
  FwbTimeline,
  FwbTimelineBody,
  FwbTimelineContent,
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineTitle,
} from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { getIsIshikawaComplete, getIshikawa } = storeToRefs(useIshikawaStore());

// TODO: Traer el list de Ishikawa
</script>

<template>
<!--      <FwbAlert icon border type="info" v-if="!getIsIshikawaComplete" class="w-full">-->
<!--        No hay ningun registro-->
<!--      </FwbAlert>-->
  <!--        <ul>-->
  <!--          <li v-for="(branch, index) in getIshikawa?.branches" :key="index">-->
  <!--             Causa: {{ `${index+1} - ${branch.causa}` }}-->
  <!--            <ul>-->
  <!--              <li v-for="(efecto, efectoIndex) in branch.efectos" :key="efectoIndex">-->
  <!--                Efecto: {{ `${efectoIndex+1} - ${efecto}` }}-->
  <!--              </li>-->
  <!--            </ul>-->
  <!--          &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->
  <!--          </li>-->
  <!--        </ul>-->

  <section class="px-24 py-6">
    <section class="flex  flex-wrap p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
      <div class="mt-2">
        <span class="text-red-500 font-semibold text-2xl indent-8"> Problematica: </span>
        <span class="leading-relaxed text-lg"> ¿Porque un jr no encuentra trabajo despues de salir de la universidad?  </span>

        <div class="p-8 bg-slate-600 rounded-xl mt-2">
          <fwb-timeline horizontal>
            <fwb-timeline-item v-for="(branch, index) in getIshikawa?.branches" :key="index">
              <fwb-timeline-point>
                <FontAwesomeIcon icon="fa-solid fa-info" />
              </fwb-timeline-point>
              <fwb-timeline-content>
                <fwb-timeline-title class="text-slate-900">
                    {{ branch.causa }}
                </fwb-timeline-title>
                <fwb-timeline-body class="text-slate-50" v-for="(efecto, efectoIndex) in branch.efectos" :key="efectoIndex">
                  {{ efecto }}
                </fwb-timeline-body>
              </fwb-timeline-content>
            </fwb-timeline-item>
          </fwb-timeline>
        </div>

      </div>

      <!--        <pre>-->
      <!--        {{ getIshikawa }}-->
      <!--        </pre>-->
      <!--        <ListIshikawa />-->


    </section>
  </section>
</template>
