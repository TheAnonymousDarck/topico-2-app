<template>
    <div class="mx-5">
        <table class="mt-2 border-2 border-red-500 ">
            <thead>
                <td class="px-2 text-slate-500">Puntos totales</td>
                <td class="px-2 text-red-500">Malas</td>
                <td class="px-2 text-teal-500">buenas</td>
                <td class="px-2 text-violet-500">Puntaje</td>
            </thead>
            <tbody>
                <td class="text-center text-slate-500"> 10</td>
                <td class="text-center text-red-500">{{ qErrors }}</td>
                <td class="text-center text-teal-500">{{ qCorrects }}</td>
                <td class="text-center text-violet-500">{{ points }}</td>
            </tbody>
        </table>

        <div class="flex flex-col my-6">
            <form @submit.prevent="submitSurvey">
                <div v-for="(question, index) in questions" :key="index" class="block">
                    <h2 class="font-bold title">{{ question.text }}</h2>
                    <div class="">
                        <div v-for="(option, optionIndex) in question.options" :key="optionIndex" class="s">

                            <div class="m-2">
                                <label class="checkbox">
                                    <input type="radio" :id="`${index}-${optionIndex}`" :value="option"
                                        v-model="answers[index]">
                                    {{ option }}
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <FwbButton color="purple" type="submit" class="mt-2">
                        Evaluar
                    </FwbButton>
                </div>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { FwbButton } from 'flowbite-vue';

interface Question {
    text: string;
    options: string[];
}

const points = ref<number>(0);
const qErrors = ref<number>(0);
const qCorrects = ref<number>(0);

const questions: Question[] = [
    { text: '1.- ¿De donde es Carlos Kazuga?', options: ['México', 'Colombia', 'Japón', 'Xochimilco'] },
    { text: '2.- ¿Quien es el presidente de Yakult México?', options: ['Carlos Kazuga', 'Yokoi Kenji', 'Carlos Slim', 'el Peje'] },
    { text: '3.- ¿De donde es Yokoi Kenji?', options: ['México', 'Colombia', 'Japón', 'Xochimilco'] },
    { text: '4.- ¿Carlos Kazuga es conferencista y escritor?', options: ['Si', 'No', 'Talvez', 'Si, de hecho mi abuelo lo vio una vez en el metro, que humilde ese Kazuga me cae de maiz veda que si'] },
    { text: '5.- ¿Cuál es la filosofía de vida promovida por Carlos Kasuga?', options: ['una filosofía de vida basada en el esfuerzo, la constancia, la disciplina y la honestidad.', 'una filosofía de vida basada en el robo, la flojera y la deshonestidad.', 'una filosofía de vida basada en el esfuerzo, la paz y vibrar alto.'] }
];

const answers = new Array(questions.length).fill('');
const answersCorrects = [0, 0, 1, 1, 0];



function submitSurvey() {
    console.log('Respuestas:', answers);
    console.log(`Número de respuestas correctas: ${qCorrects.value}`);
    // Aquí puedes enviar las respuestas a tu servidor o hacer lo que necesites con ellas.
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === questions[i].options[answersCorrects[i]]) {
            qCorrects.value++;
            qErrors.value = 5 - qCorrects.value;
            points.value += 2;
        }
    }
    console.log(`Número de respuestas correctas: ${qCorrects.value}`);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}
</script>