<script setup lang="ts">
import { ref } from 'vue';
// import ActivityRes from '@/components/Outliers/ActivityRes.vue';
// import { ActivityRes } from './ActivityRes.vue';
// import { FwbInput, FwbRadio, FwbButton } from 'flowbite-vue';

const show = ref(false);

const canShow = () => show.value = !show.value;

// function submitSurvey() {
//     canShow()
// }

const questions = [
    '¿Cómo puedes aplicar las lecciones y conceptos presentados en "Fuera de Serie" a tus propias metas y aspiraciones?',
    '¿Cómo afecta la idea que presenta el autor en el libro a tu percepción sobre el éxito y la excelencia?',
    '¿En qué medida crees que las historias y ejemplos presentados por Malcolm Gladwell en el libro son aplicables a diferentes culturas y contextos sociales?',
    '¿Has experimentado alguna vez la influencia de tu cultura o entorno en tus oportunidades de éxito?',
    '¿Crees que el éxito se debe más a la habilidad individual o a las oportunidades externas?',
    '¿Qué papel crees que juega la práctica y la dedicación en el éxito?',
    'Gladwell explora la idea de la "regla de las 10,000 horas" en el libro. ¿Qué opinas sobre esta teoría y cómo se relaciona con tus propias experiencias y metas?',
    '¿Cuál es tu opinión sobre el equilibrio entre el esfuerzo individual y los factores externos en el camino hacia el éxito?',
    'En el libro se habla sobre la importancia de la cultura y las circunstancias en el éxito de una persona. ¿Cómo crees que tu entorno y tu cultura han influido en tu vida y en tus logros?',
    'Gladwell presenta ejemplos de personas que, debido a su lugar de nacimiento o año de nacimiento, tuvieron oportunidades únicas. ¿Cómo crees que estos factores afectan el desarrollo individual y las oportunidades?',
];

</script>

<template>
    <div class="p-3 antialiased text-center rounded-lg shadow-2xl mx-44 border-amber-400 opacity-90 bg-amber-50">
        <div class="flex justify-start" v-for="(d, index) in questions" :key="index">
            <label class="mt-2 text-justify text-pretty"> {{ d }}</label>
        </div>

        <!-- <ActivityRes /> -->
        <FwbButton @click="canShow()">Restore</FwbButton>
        <!--      <ActivityRes :data="questions" v-if="show" />-->
        <!--        <div v-if="!show">-->
        <!--            <h2 class="font-bold">Encuesta sobre el éxito</h2>-->
        <!--            <form @submit.prevent="submitSurvey()" class="flex flex-col px-4 space-y-2">-->
        <!--                <div class="form-group" v-for="(question, index) in questions" :key="index">-->
        <!--                    <FwbInput v-if="question.type === 'text'" v-model="question.answer" :label="question.text" />-->

        <!--                    <select v-else-if="question.type === 'select'" v-model="question.answer">-->
        <!--                        <option v-for="(option, optionIndex) in question.options" :key="optionIndex">{{ option }}-->
        <!--                        </option>-->
        <!--                    </select>-->

        <!--                    <div v-else-if="question.type === 'radio'">-->
        <!--                        <span> {{ question.text }} </span>-->
        <!--                        <FwbRadio v-for="(option, optionIndex) in question.options" :key="optionIndex"-->
        <!--                            v-model="question.answer" :value="option" :name="option" :label="option" />-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                <FwbButton type="submit" class="">Enviar</FwbButton>-->
        <!--            </form>-->
        <!--        </div>-->
    </div>
</template>

<style scoped></style>