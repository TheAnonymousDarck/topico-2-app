<script setup lang="ts">
// import ParetoList from '@/components/TestTools/Pareto/ParetoList.vue'
import { FwbInput } from 'flowbite-vue'
import { useParetoStore } from '@/stores/paretoStore'
import { ref } from 'vue'
import { FwbToast } from 'flowbite-vue'
// TODO: terminar esta madre

const qy1 = 80;
const qy2 = 90;
const qy3 = 23;
const qy4 = 50;
const qy5 = 56;

const msg = ref('');
const show = ref(false);

function saveQ(){
  useParetoStore().saveQ1(qy1);
  useParetoStore().saveQ2(qy2);
  useParetoStore().saveQ3(qy3);
  useParetoStore().saveQ4(qy4);
  useParetoStore().saveQ5(qy5);

  msg.value = 'puedes ir a la pagina anterior';
  show.value = true;
}

</script>
<template>
  <FwbToast type="success" v-if="show">
    {{ msg }}
  </FwbToast>
    <div class="">
      <FwbInput
        v-model="qy1" disabled
        label="¿En qué medida crees que la falta de experiencia laboral contribuye a la dificultad de encontrar empleo para los recién graduados?"
      />
      <FwbInput
        v-model="qy2" disabled
        label="¿Qué porcentaje de la competencia en el mercado laboral crees que se debe a la experiencia de los candidatos?"
      />
      <FwbInput
        v-model="qy3" disabled
        label="¿Qué importancia le asignarías a las habilidades de comunicación en la capacidad de un recién graduado para conseguir trabajo (del 1 al 100)?"
      />
      <FwbInput
        v-model="qy4" disabled
        label="¿Cuánto impacto crees que tiene el desconocimiento de las oportunidades laborales disponibles en la tasa de desempleo de los recién graduados?"
      />
      <FwbInput
        v-model="qy5" disabled
        label="En una escala del 1 al 100, ¿qué tan significativo consideras el papel de la falta de preparación para entrevistas en la falta de empleo para los recién graduados?"
      />

      <button @click="saveQ">
        Guardar
      </button>
    </div>
</template>
<style scoped></style>