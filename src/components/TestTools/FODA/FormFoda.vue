<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput, FwbListGroup, FwbListGroupItem, FwbButton, FwbToast, FwbAlert } from 'flowbite-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { Fortaleza, Oportunidad, Debilidad, Amenaza } from '@/types/Foda';
import { useFodaStore } from '@/stores/fodaStore'

const props = defineProps<{
    name: string,
    listItem: Fortaleza[] | Oportunidad[] | Debilidad[] | Amenaza[] | string[],
}>();

const fodaStore = useFodaStore();

function saveDataToStore(listItem: Fortaleza[] | Oportunidad[] | Debilidad[] | Amenaza[] | string[]) {
  if (props.name === 'Fortalezas') {
    fodaStore.saveF(listItem as Fortaleza[]);
  } else if (props.name === 'Oportunidades') {
    fodaStore.saveO(listItem as Oportunidad[]);
  } else if (props.name === 'Debilidades') {
    fodaStore.saveD(listItem as Debilidad[]);
  } else if (props.name === 'Amenazas') {
    fodaStore.saveA(listItem as Amenaza[]);
  }
}

const item = ref<string>('');
// const test = ref<string[]>(['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve',]);
// const listItems = ref<string[]>([]);
const listItems = props.listItem;
const show = ref<boolean>(false);
const editIndex = ref<number | null>(null);


console.log(props.listItem.length)
function add() {
    // if (props.listItem.length >= 10) {
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
    <div>
        <FwbToast divide type="warning" v-if="show">
            El limite máximo es de 10 {{ props.name }}.
        </FwbToast>
        <span class="pb-5">{{ props.name }}</span>
        <FwbInput v-model="item" class="mt-1" :placeholder='`Agrega ${props.name}`' size="lg" :disabled="show">
            <template #suffix>
                <FwbButton @click="add()" :disabled="show">
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
<style scoped></style>