<script setup lang="ts">
import {
  FwbAlert,
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
import { storeToRefs } from 'pinia'
import { useCatwdaStore } from '@/stores/catwdaStore'

const { getIsCatwdaComplete, catwda } = storeToRefs(useCatwdaStore());

</script>

<template>
  <section class="px-24 py-12">
    <section class="flex  flex-wrap p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
      <FwbAlert icon border type="info" v-if="!getIsCatwdaComplete" class="w-full">
        No hay ningun registro
      </FwbAlert>
        <div class="mt-2 w-full">
          <span class="text-red-500 font-semibold text-2xl indent-8"> Problematica: </span>
          <span class="leading-relaxed text-lg"> ¿Porque un jr no encuentra trabajo despues de salir de la universidad?  </span>
          <br>
          <FwbAccordion>
            <FwbAccordionPanel>
              <FwbAccordionHeader> Clientes</FwbAccordionHeader>
              <FwbAccordionContent>
                <ul>
                  <li v-for="(subItem, subIndex) in catwda?.clientes" :key="subIndex">
                    {{ subItem }}
                  </li>
                </ul>
              </FwbAccordionContent>
            </FwbAccordionPanel>
            <FwbAccordionPanel>
              <FwbAccordionHeader> Actores</FwbAccordionHeader>
              <FwbAccordionContent>
                <ul>
                  <li v-for="(subItem, subIndex) in catwda?.actores" :key="subIndex">
                    {{ subItem }}
                  </li>
                </ul>
              </FwbAccordionContent>
            </FwbAccordionPanel>
            <FwbAccordionPanel>
              <FwbAccordionHeader> Transformación</FwbAccordionHeader>
              <FwbAccordionContent>
                <ul>
                  <li v-for="(subItem, subIndex) in catwda?.transformacion" :key="subIndex">
                    {{ subItem }}
                  </li>
                </ul>
              </FwbAccordionContent>
            </FwbAccordionPanel>
            <FwbAccordionPanel>
              <FwbAccordionHeader> welstanchaung</FwbAccordionHeader>
              <FwbAccordionContent>
                <ul>
                  <li v-for="(subItem, subIndex) in catwda?.welstanchaung" :key="subIndex">
                    {{ subItem }}
                  </li>
                </ul>
              </FwbAccordionContent>
            </FwbAccordionPanel>
            <FwbAccordionPanel>
              <FwbAccordionHeader> Dueños</FwbAccordionHeader>
              <FwbAccordionContent>
                <ul>
                  <li v-for="(subItem, subIndex) in catwda?.duenios" :key="subIndex">
                    {{ subItem }}
                  </li>
                </ul>
              </FwbAccordionContent>
            </FwbAccordionPanel>
            <FwbAccordionPanel>
              <FwbAccordionHeader> Ambientes</FwbAccordionHeader>
              <FwbAccordionContent>
                <ul>
                  <li v-for="(subItem, subIndex) in catwda?.ambientes" :key="subIndex">
                    {{ subItem }}
                  </li>
                </ul>
              </FwbAccordionContent>
            </FwbAccordionPanel>


          </FwbAccordion>
        </div>

    </section>
  </section>
</template>
