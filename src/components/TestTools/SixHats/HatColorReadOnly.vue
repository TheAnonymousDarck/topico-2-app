<script setup lang="ts">
import { computed, ref } from 'vue'
import { FwbButton, FwbTextarea, FwbModal } from 'flowbite-vue'
import type { Hat } from '@/interfaces/Index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

interface dataColorContent{
  color: string;
  content: string;
}
const props = defineProps<{
  hat: Hat,
}>();

const content = computed(
  () => dataColor.find(item => item.color === props.hat.color)
);
const color = computed( () => {
  if (props.hat.color === 'White') {
    return 'gray';
  }
  if (props.hat.color === 'Black'){
    return 'dark';
  }
  return props.hat.color.toLowerCase();
});

const isShowModal = ref(false)
function closeModal () {
  isShowModal.value = false
}
function showModal () {
  isShowModal.value = true
}
const dataColor: dataColorContent[] = [
  {
    color:    'White',
    content: 'El color transmite neutralidad y nos pone en la perspectiva del pensamiento objetivo, donde no entran en juego las emociones ni las opiniones, solo los datos, hechos y cifras comprobables.'
  },
  {
    color:'Red',
    content:'El color transmite pasión y nos permite expresar nuestros sentimientos, la parte irracional y más intuitiva. Es muy importante para introducir los valores y a las personas dentro de la toma de decisiones.'
  },
  {
    color:   'Yellow',
    content: 'Su color se asocia con el sol y con su luz y su aplicación nos permite ver el lado optimista de las cosas y las ventajas de una idea. Es el contrapunto del sombrero negro y mucho más difícil de aplicar ya que, evolutivamente, no estamos dotados de un mecanismo optimista y sería de alguna manera ir a contracorriente. Cuando se usa el sombrero amarillo no hay que caer en el error del sí por el sí, se trata de partir de un planteamiento optimista que nos ayude a encontrar nuevas ventajas o valores donde antes no los veíamos. Es el sombrero de los soñadores o visionarios que  trabajan por conseguir su sueño.'
  },
  {
    color:  'Blue',
    content:'Nos transmite el control y su función es gestionar la dinámica enfocando a los participantes lo mejor posible para obtener los mejores resultados. Es el conocido como el sombrero de sombreros y en la aplicación de la dinámica uno de los integrantes tiene que tenerlo siempre presente.'
  },
  {
    color:  'Black',
    content:'Es el color de la oscuridad y nos sitúa en un punto de vista crítico y de cautela hacia un planteamiento. Este es quizás el punto de vista que más solemos utilizar en nuestro día a día ya que, al fin y al cabo, se trata de identificar peligros, posibles problemas, en una palabra sobrevivir. El sombrero negro nos permite ponernos en alerta sobre todo aquello que nos puede causar un problema, evita lo ilegal, lo peligroso, lo contaminante, el gasto inútil, etc.'
  },
  {
    color:  'Green',
    content:'Es el color de la vegetación, nos transmite crecimiento, generación, energía, por eso se asocia al pensamiento creativo. Este sombrero se utilizará para generar ideas a las posibles problemáticas o necesidades planteadas y en su uso tienen cabida muchas técnicas creativas como el brainstorming o las analogías.'
  },
];
</script>

<template>
    <div>
      <div class="flex justify-center">
        <FontAwesomeIcon icon="fa-solid fa-hat-wizard" class="text-5xl text-center"
        :class="`text-${color}-500`" @click="showModal"
        />
        <FwbModal v-if="isShowModal" @close="closeModal">
          <template #header>
            <div class="flex items-center text-lg">
              {{ props.hat.role }}
            </div>
          </template>
          <template #body>
            <div class="grid grid-cols-4">

              <div class="flex justify-center self-center">
                <FontAwesomeIcon icon="fa-solid fa-hat-wizard" class="text-7xl"
                                 :class="`text-${color}-500`"
                />
              </div>
              <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 col-span-3">
                {{ content!.content }}
              </p>
            </div>
          </template>
          <template #footer>
            <div class="flex justify-between">
              <fwb-button @click="closeModal" color="green">
                Entendido
              </fwb-button>
            </div>
          </template>
        </FwbModal>

      </div>
      <FwbTextarea
        v-model="props!.hat.data"
        :rows="6"
        custom
        :label="props.hat.role"
        readonly
        placeholder="Separa cada idea con un enter"
      >
      </FwbTextarea>
    </div>
</template>