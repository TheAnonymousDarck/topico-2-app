<script setup lang="ts">
import { FwbInput } from 'flowbite-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import { useToolsDecisionsStore } from '@/stores/toolsDecisions'

const { getProblem, saveProblem } = useToolsDecisionsStore();

const titleProblematic = ref<string>('');
const showEditIcon = ref(false);
const editing = ref(false);
const editedTitle = ref<string>('');

function startEditing() {
  editing.value = true;
  editedTitle.value = titleProblematic.value;
}

function saveEdit() {
  // problem = editedTitle.value;
  saveProblem(editedTitle.value);
  editing.value = false;
console.log(getProblem);
}


</script>

<template>
  <div>
    <FwbInput
      v-model="titleProblematic"
      label="¿Cuál es tu problemática?"
      class="mr-2"
      v-if="!editing"
      @keydown.enter="startEditing"
    />
    <span v-show="!editing && !showEditIcon">{{ titleProblematic }}</span>
    <div class="flex items-center space-x-1" v-if="showEditIcon || editing">
      <span v-show="!editing && showEditIcon">
        <FontAwesomeIcon
          icon="fa-solid fa-pen-to-square"
          color="yellow"
          class="p-2 cursor-pointer"
          @click="startEditing"
        />
      </span>
      <span v-show="editing">
        <FwbInput v-model="editedTitle" class="mr-2" @keydown.enter="saveEdit" />
        <FontAwesomeIcon
          icon="fa-solid fa-check"
          color="green"
          class="p-2 cursor-pointer"
          @click="saveEdit"
        />
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>