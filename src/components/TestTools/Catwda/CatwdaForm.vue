<script setup lang="ts">
import { FwbAlert, FwbButton, FwbInput, FwbListGroup, FwbListGroupItem, FwbModal,FwbTooltip } from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { Actor, Ambiente, Cliente, Duenio, Transformacion, Welstanchaung } from '@/interfaces/Index'
import type { InfoModal } from '@/interfaces/InfoModal'
import { useCatwdaStore } from '@/stores/catwdaStore'
import { ref } from 'vue'

const props = defineProps<{
  name: string,
  listItem: Cliente[] | Actor[] | Transformacion[] | Welstanchaung[] | Duenio[] | Ambiente[] | string[],
  infoModal: InfoModal,
}>();

const catwdaStore = useCatwdaStore();
function saveDataToStore(listItem: Cliente[] | Actor[] | Transformacion[] | Welstanchaung[] | Duenio[] | Ambiente[] | String[]) {
  if (props.name === 'Clientes') {
    catwdaStore.saveC(listItem as Cliente[]);
  } else if (props.name === 'Actores') {
    catwdaStore.saveA(listItem as Actor[]);
  } else if (props.name === 'Transformacion') {
    catwdaStore.saveT(listItem as Transformacion[]);
  } else if (props.name === 'Welstanchaung') {
    catwdaStore.saveW(listItem as Welstanchaung[]);
  } else if (props.name === 'Duenios') {
    catwdaStore.saveD(listItem as Duenio[]);
  } else if (props.name === 'Ambientes') {
    catwdaStore.saveAFinal(listItem as Ambiente[]);
  }
}

const item = ref<string>('');
// const test = ref<string[]>(['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',]);
const listItems = props.listItem;
const show = ref<boolean>(false);
const editIndex = ref<number | null>(null);
const isShowModal = ref(false)

function closeModal () {
  isShowModal.value = false
}
function showModal () {
  isShowModal.value = true
}


console.log(props.listItem.length)
function add() {
  if (listItems.length >= 10) {
    show.value = true;
    return;
  }

  if (item.value.trim() !== '') {
    listItems.push(item.value.trim());
    item.value = '';
  }

  saveDataToStore(props.listItem);
  console.log(listItems)
}

function deleteItem(index: number) {
  listItems.splice(index, 1);
  if (listItems.length < 10) {
    show.value = false;
  }
}

function edit(index: number) {
  editIndex.value = index;
  item.value = listItems[index];
}

function saveEdit(index: number) {
  // Guarda la edición y reinicia el estado de edición
  listItems[index] = item.value;
  editIndex.value = null;
}

</script>

<template>
<div class=" flex gap-1 flex-row py-1">
      <FwbButton @click="showModal" color="blue" >
        <FontAwesomeIcon icon="fa-solid fa-info" />
      </FwbButton>



  <FwbModal v-if="isShowModal" @close="closeModal">
    <template #header>
      <div class="flex items-center text-lg">
        {{ props.infoModal.title }}
      </div>
    </template>
    <template #body>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
        <ul class="list-outside list-disc">
          <li v-for="(c, index) in props.infoModal.content" :key="index">{{ c }}</li>
        </ul>
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <fwb-button @click="closeModal" color="green">
          Entendido
        </fwb-button>
      </div>
    </template>
  </FwbModal>
  <FwbInput v-model="item" class="w-full" :placeholder='`Agrega una ${props.name}`' size="lg" :disabled="show" @keydown.enter="add">
    <template #suffix>
      <FwbButton @click="add" :disabled="show">
        <FontAwesomeIcon icon="fa-solid fa-add" />
      </FwbButton>
    </template>
  </FwbInput>
</div>
  <div class="mt-2">
    <FwbAlert icon border type="info" v-if="listItems.length == 0">
      No hay ningun registro
    </FwbAlert>

    <FwbListGroup class="grid w-full grid-cols-2 gap-4">
      <FwbListGroupItem hover class="flex justify-between" v-for="(list, index) in  listItems " :key="index">
        <span v-if="editIndex !== index">{{ `${index + 1} - ${list}` }}</span>
        <FwbInput v-model="item" v-if="editIndex === index" class="mr-2" />
        <div class="space-x-1">
          <FwbButton color="green" class="p-2" @click="saveEdit(index)" v-if="editIndex === index">
            <FontAwesomeIcon icon=" fa-solid fa-check" />
          </FwbButton>
          <FwbButton color="yellow" class="p-2" @click="edit(index)" v-if="editIndex !== index">
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </FwbButton>
          <FwbButton color="red" class="p-2">
            <FontAwesomeIcon icon="fa-solid fa-trash" @click="deleteItem(index)" />
          </FwbButton>
        </div>
      </FwbListGroupItem>
    </FwbListGroup>
  </div>
</template>

<style scoped>

</style>