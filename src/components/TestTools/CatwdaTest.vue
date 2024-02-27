<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCatwdaStore } from '@/stores/catwdaStore'
import CatwdaForm from '@/components/TestTools/Catwda/CatwdaForm.vue'
import { FwbButton } from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { InfoModal } from '@/interfaces/InfoModal'

const { clientes, actores, transformacion, welstanchaung, duenios, ambientes, isCatwdaComplete } =  storeToRefs(useCatwdaStore());

const finished = ref(false);
const showClientes = ref(true);
const showActores = ref(false);
const showTransformacion = ref(false);
const showWelstanchaung = ref(false);
const showDuenios = ref(false);
const showAmbientes = ref(false);
const isFirstForm = ref(true);

const previousForm = () => {
  if (showClientes.value) {
    isFirstForm.value = true;
  }
  if (showAmbientes.value) {
    showAmbientes.value = false;
    showDuenios.value = true;
  } else if (showDuenios.value) {
    showDuenios.value = false;
    showWelstanchaung.value = true;
  } else if (showWelstanchaung.value) {
    showWelstanchaung.value = false;
    showTransformacion.value = true;
  } else if (showTransformacion.value) {
    showTransformacion.value = false;
    showActores.value = true;
  } else if (showActores.value) {
    showActores.value = false;
    showClientes.value = true;
  }
};

const nextForm = () => {
  isFirstForm.value = false;
  if (showClientes.value) {
    showClientes.value = false;
    showActores.value = true;
  } else if (showActores.value) {
    showActores.value = false;
    showTransformacion.value = true;
  } else if (showTransformacion.value) {
    showTransformacion.value = false;
    showWelstanchaung.value = true;
  } else if (showWelstanchaung.value) {
    showWelstanchaung.value = false;
    showDuenios.value = true;
  } else if (showDuenios.value) {
    showDuenios.value = false;
    showAmbientes.value = true;
  }else {
    finished.value = true;
  }
};

const finishForm = () => {
  if (showClientes.value) {
    useCatwdaStore().saveC(clientes.value);
  } else if (showActores.value) {
    useCatwdaStore().saveA(actores.value);
  } else if (showTransformacion.value) {
    useCatwdaStore().saveT(transformacion.value);
  } else if (showWelstanchaung.value) {
    useCatwdaStore().saveW(welstanchaung.value);
  } else if (showDuenios.value) {
    useCatwdaStore().saveD(duenios.value);
  } else if (showAmbientes.value) {
    useCatwdaStore().saveAFinal(ambientes.value);
  }

  console.log('Catwda guardado')
  finished.value = true;
  isCatwdaComplete.value = true;
};
const info: InfoModal[] =[
  {
    title: '¿Quienes son los Clientes?',
    content: [
      '(Clientes potenciales de los recién graduados, como empleadores)',
      'Identificar las necesidades y expectativas de los empleadores respecto a los candidatos que buscan contratar.',
      'Entender los requisitos específicos del mercado laboral y cómo los recién graduados pueden satisfacer esas necesidades.',
    ]
  },
  {title: '¿Quienes son los Actores?' ,content: [
    '(Individuos y entidades involucrados en el proceso de búsqueda de empleo)',
    'Analizar el papel de los recién graduados, los empleadores, las instituciones educativas, los servicios de orientación laboral, entre otros.',
    'Identificar cómo cada uno de estos actores afecta la capacidad de los recién graduados para encontrar trabajo.'
    ] },
  {title: '¿Que es la Transformación?' ,content: [
    '(El proceso de transición de la educación al empleo)',
    'Evaluar las etapas clave en el proceso de búsqueda de empleo, desde la preparación del currículum hasta las entrevistas y la negociación de ofertas.',
    'Identificar posibles puntos críticos donde los recién graduados pueden enfrentar obstáculos o dificultades.',
    ] },
  {title: '¿Que es Welstanchaung?' ,content: [
    '(Factores internos y externos que influyen en la inserción laboral de los recién graduados):',
    'Examinar cómo factores como la situación económica, la demanda laboral en diferentes sectores y la política de contratación afectan las oportunidades de empleo para los recién graduados.',
    'Analizar el impacto de las tendencias tecnológicas y sociales en el mercado laboral y cómo afectan las oportunidades de empleo para los recién graduados.',
    ] },
  {title: '¿Quienes son los Dueños?' ,content: [
    '(Individuos o entidades responsables de abordar el problema)',
    'Identificar quiénes son los responsables de implementar soluciones para mejorar las oportunidades de empleo para los recién graduados.',
    'Establecer roles y responsabilidades claras para las instituciones educativas, los gobiernos, los empleadores y otros actores relevantes.',
    ] },
  {title: '¿Que son los Ambientes?' ,content: [
    '(Contexto externo que afecta el problema)',
    'Analizar cómo factores macroeconómicos, políticos, culturales y tecnológicos impactan en la inserción laboral de los recién graduados.',
    'Identificar oportunidades y amenazas en el entorno externo que pueden influir en la búsqueda de empleo de los recién graduados.',
    ] },
  ];
</script>
<template>
  <CatwdaForm v-if="showClientes" :list-item="clientes" name="Clientes"  :info-modal="info[0]" />
  <CatwdaForm v-if="showActores" :list-item="actores" name="Actores"  :info-modal="info[1]"/>
  <CatwdaForm v-if="showTransformacion" :list-item="transformacion" name="Transformacion" :info-modal="info[2]"/>
  <CatwdaForm v-if="showWelstanchaung" :list-item="welstanchaung" name="Welstanchaung" :info-modal="info[3]"/>
  <CatwdaForm v-if="showDuenios" :list-item="duenios" name="Duenios" :info-modal="info[4]"/>
  <CatwdaForm v-if="showAmbientes" :list-item="ambientes" name="Ambientes" :info-modal="info[5]"/>

  <div class="flex justify-between mt-2">
    <FwbButton gradient="purple-blue" square @click="previousForm" disabled v-if="isFirstForm">
      <FontAwesomeIcon icon="fa-solid fa-arrow-left" class="text-center" size="lg" />
    </FwbButton>
    <FwbButton gradient="purple-blue" square @click="previousForm" v-if="!isFirstForm">
      <FontAwesomeIcon icon="fa-solid fa-arrow-left" class="text-center" size="lg" />
    </FwbButton>

    <FwbButton gradient="purple-blue" square v-if="!finished" @click="nextForm">
      <FontAwesomeIcon icon="fa-solid fa-arrow-right" size="lg" />
    </FwbButton>
    <FwbButton gradient="purple-blue" square v-else @click="finishForm">
      Finalizar
      <FontAwesomeIcon icon="fa-solid fa-check" size="lg" />
    </FwbButton>
  </div>
</template>
<style scoped></style>