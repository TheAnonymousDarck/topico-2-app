<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput, FwbButton } from 'flowbite-vue';
// import { FwbInput, FwbListGroup, FwbListGroupItem, FwbButton, FwbToast, FwbAlert } from 'flowbite-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type {  Causa, Efecto,  } from '@/interfaces/Index'
import { useIshikawaStore } from '@/stores/ishikawaStore'

const props = defineProps<{
  name: string,
}>();

const show = ref<boolean>(false);
const causa = ref<Causa>(''); // Aquí puedes inicializar el valor de causa si es necesario
const efecto = ref<Efecto>('');
const efectos = ref<Efecto[]>([]);

const agregarEfecto = () => {
  if (efecto.value.trim() !== '') {
    efectos.value.push(efecto.value);
    efecto.value = '';
  }
};

const guardar = () => {
  if (causa.value.trim() !== '' && efectos.value.length > 0) {
    useIshikawaStore().saveBranch(causa.value, efectos.value);
    limpiar();
  }
};

const limpiar = () => {
  causa.value = '';
  efecto.value = '';
  efectos.value = [];
};

const addBranch = () => {
  if (causa.value.trim() !== '' && efectos.value.length > 0) {
    useIshikawaStore().addBranch(causa.value, efectos.value);
    limpiar();
  }
}

</script>
<template>
  <span>
<!--    <pre>-->
<!--    {{ useIshikawaStore().ishikawa }}-->
<!--    </pre>-->
    {{ props.name }}
  </span>
  <div>
    <FwbInput v-model="causa" class="mt-1" placeholder='Agrega una Causa' size="lg" :disabled="show" @keydown.enter="guardar">
      <template #suffix>
        <FwbButton @click="guardar" :disabled="show">
          <FontAwesomeIcon icon="fa-solid fa-add" />
        </FwbButton>
      </template>
    </FwbInput>

    <FwbInput v-model="efecto" class="mt-1" placeholder='Agrega su efecto' size="lg" :disabled="show" @keydown.enter="agregarEfecto">
      <template #suffix>
        <FwbButton @click="agregarEfecto" :disabled="show">
          <FontAwesomeIcon icon="fa-solid fa-add" />
        </FwbButton>
      </template>
    </FwbInput>


      <ul class="mt-2 ml-5 list-decimal">
        <li v-for="(efecto, index) in efectos" :key="index">
          <span> {{ efecto }} </span>
        </li>
      </ul>

    <div class="mt-2 space-x-1 text-center">
      <FwbButton @click="addBranch" :disabled="show" color="green">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </FwbButton>

      <FwbButton @click="limpiar" :disabled="show" color="red">
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </FwbButton>
    </div>
  </div>
</template>
<style scoped></style>