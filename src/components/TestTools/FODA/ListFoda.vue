<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput, FwbListGroup, FwbListGroupItem, FwbButton, FwbAlert } from 'flowbite-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Fortaleza, Oportunidad, Debilidad, Amenaza } from '@/types/Foda';

const props = defineProps<{
  listItem: Fortaleza[] | Oportunidad[] | Debilidad[] | Amenaza[] | string[],
}>();

const item = ref<string>('');
// const test = ref<string[]>(['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',]);
const listItems = props.listItem;
const show = ref<boolean>(false);
const editIndex = ref<number | null>(null);

function deleteItem(index: number) {
  listItems.splice(index, 1);
  if (listItems.length < 10) {
    show.value = false; // Ocultar el toast si hay menos de 10 elementos después de eliminar
  }
}

function edit(index: number) {
  editIndex.value = index;
  item.value = listItems[index];
}

function saveEdit(index: number) {
  listItems[index] = item.value;
  editIndex.value = null;
}
</script>
<template>
  <div class=" bg-slate-200 ">
    <FwbAlert icon border type="info" v-if="listItems.length == 0">
      No hay ningun registro
    </FwbAlert>

    <FwbListGroup class="grid w-full   bg-slate-200" >
      <FwbListGroupItem hover class="flex justify-between bg-slate-200 border-slate-200 hover:bg-slate-300" v-for="(list, index) in  listItems " :key="index">
        <span v-if="editIndex !== index">{{ `${index + 1} - ${list}` }}</span>
        <FwbInput v-model="item" v-if="editIndex === index" class="mr-2" />
        <div class="space-x-1">
          <FwbButton color="green" class="" @click="saveEdit(index)" v-if="editIndex === index">
            <FontAwesomeIcon icon=" fa-solid fa-check" />
          </FwbButton>
          <FwbButton color="yellow" class="" @click="edit(index)" v-if="editIndex !== index">
            <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </FwbButton>
          <FwbButton color="red" class="">
            <FontAwesomeIcon icon="fa-solid fa-trash" @click="deleteItem(index)" />
          </FwbButton>
        </div>
      </FwbListGroupItem>
    </FwbListGroup>
  </div>
</template>