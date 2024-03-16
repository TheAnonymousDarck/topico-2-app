<script setup lang="ts">
// interface Question {
//   text: string;
//   type: 'text' | 'select' | 'radio';
//   options?: string[];
//   answer: string | null;
// }

// const props = defineProps<{
//   data?: Question,
// }>();

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

// const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true });
//
// async function main() {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "system", content: "You are a helpful assistant." }],
//     model: "gpt-3.5-turbo",
//   });
//
//   console.log(completion.choices[0]);
// }
//
// main();
</script>

<template>
  <div class="flex justify-start" v-for="(d, index) in questions" :key="index">
    <label class="mt-2 text-justify text-pretty"> {{ d }}</label>
  </div>

</template>