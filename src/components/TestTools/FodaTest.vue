<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { useFodaStore } from '@/stores/fodaStore'
import { FwbButton } from 'flowbite-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import FormFoda from './FODA/FormFoda.vue'

const {  fortalezas, oportunidades, debilidades, amenazas, isFodaComplete } =  storeToRefs(useFodaStore());

const finished = ref(false);
const showFortalezas = ref(true);
const showOportunidades = ref(false);
const showDebilidades = ref(false);
const showAmenazas = ref(false);
const isFirstForm = ref(true); // Propiedad para verificar si estamos en el primer formulario

const previousForm = () => {
    if (showFortalezas.value) {
        isFirstForm.value = true;
    }
    if (showAmenazas.value) {
        showAmenazas.value = false;
        showDebilidades.value = true;
    } else if (showDebilidades.value) {
        showDebilidades.value = false;
        showOportunidades.value = true;
    } else if (showOportunidades.value) {
        showOportunidades.value = false;
        showFortalezas.value = true;
    }
};

const nextForm = () => {
    isFirstForm.value = false;
    if (showFortalezas.value) {
        showFortalezas.value = false;
        showOportunidades.value = true;
    } else if (showOportunidades.value) {
        showOportunidades.value = false;
        showDebilidades.value = true;
    } else if (showDebilidades.value) {
        showDebilidades.value = false;
        showAmenazas.value = true;
    } else {
        finished.value = true;
    }
};

const finishForm = () => {
  if (showFortalezas.value) {
    useFodaStore().saveF(fortalezas.value);
  } else if (showOportunidades.value) {
    useFodaStore().saveO(oportunidades.value);
  } else if (showDebilidades.value) {
    useFodaStore().saveD(debilidades.value);
  } else if (showAmenazas.value) {
    useFodaStore().saveA(amenazas.value);
  }

  console.log('foda guardado');
  finished.value = true;
  isFodaComplete.value = true;
};

</script>
<template>
    <FormFoda v-if="showFortalezas" name="Fortalezas" :listItem="fortalezas"  />
    <FormFoda v-if="showOportunidades" name="Oportunidades" :listItem="oportunidades"  />
    <FormFoda v-if="showDebilidades" name="Debilidades" :listItem="debilidades"  />
    <FormFoda v-if="showAmenazas" name="Amenazas" :listItem="amenazas"  />

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