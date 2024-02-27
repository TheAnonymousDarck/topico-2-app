<template>
  <div>
    <h2>Análisis de Pareto: Problemas para encontrar empleo</h2>
    <div v-for="(pregunta, index) in preguntas" :key="index">
      <label>{{ `${index+1}.- ${ pregunta.label }` }}</label>
      <input type="number" min="1" max="100" v-model="pregunta.y" :name="`pre-${index}`">
    </div>
    <div>
      <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance" />
      <!--      <canvas ref="chartCanvas"></canvas>-->
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CanvasJSChart from '@canvasjs/vue-charts';
import type { ChartOptions, DataPoint, StyleOptions } from '@/interfaces/Chart'

onMounted( () => {
  preguntas.value.sort((a, b) => b.y! - a.y!)
});

// Chart.register(...registerables);
const preguntas = ref<DataPoint[]>([
  { label: '¿En qué medida crees que la falta de experiencia laboral contribuye a la dificultad de encontrar empleo para los recién graduados?', y: 0 },
  { label: '¿Qué porcentaje de la competencia en el mercado laboral crees que se debe a la experiencia de los candidatos?', y: 0 },
  { label: '¿Qué importancia le asignarías a las habilidades de comunicación en la capacidad de un recién graduado para conseguir trabajo (del 1 al 100)?', y: 0 },
  { label: '¿Cuánto impacto crees que tiene el desconocimiento de las oportunidades laborales disponibles en la tasa de desempleo de los recién graduados?', y: 0 },
  { label: 'En una escala del 1 al 100, ¿qué tan significativo consideras el papel de la falta de preparación para entrevistas en la falta de empleo para los recién graduados?', y: 0 },
  { label: '¿Qué importancia le darías a la competencia con personas más experimentadas en la dificultad que enfrentan los recién graduados para encontrar trabajo (del 1 al 100)?', y: 0 },
  { label: '¿Cuánto crees que contribuye la falta de actualización de habilidades requeridas por el mercado laboral al problema del desempleo juvenil?', y: 0 },
  { label: '¿Qué porcentaje de la falta de empleo para los recién graduados atribuyes a la falta de orientación vocacional durante la educación universitaria?', y: 0 },
  { label: 'En una escala del 1 al 100, ¿qué tan crítico consideras que es el impacto del ambiente económico general en las oportunidades laborales para los recién graduados?', y: 0 },
  { label: '¿Qué porcentaje de la falta de empleo para los recién graduados crees que se debe a la falta de flexibilidad para adaptarse a diferentes roles?', y: 0 },
]);

const calcularTotal = () => {
  let total = 0;
  for (const pregunta of preguntas.value) {
    total += pregunta.y!;
  }
  return total;
};

const options: ChartOptions = {
  title: {
    text: "Análisis de Pareto: Problemas para encontrar empleo"
  },
  axisY: {
    title: "Porcentaje acumulado",
    suffix: "%",
  },
  axisX: {
    title: "Problemas",
    labelAngle: -30
  },
  data: [
    {
      type: "column",
      name: "Problemas",
      dataPoints: preguntas.value
    }
  ],
};

const styleOptions: StyleOptions = {
  width: "100%",
  height: "400px"
}

const chartJs = ref<any>();
function createPareto(){
  let dps = [];
  let chart = chartJs.value;
  let yValue, yTotal = 0, yPercent = 0;
  for(let i = 0; i < chart.data[0].dataPoints.length; i++)
    yTotal += chart.data[0].dataPoints[i].y;
  for(let i = 0; i < chart.data[0].dataPoints.length; i++){
    yValue = chart.data[0].dataPoints[i].y;
    yPercent += (yValue / yTotal * 100);
    dps.push({label: chart.data[0].dataPoints[i].label, y: yPercent});
  }
  chart.addTo("data",{type:"line", yValueFormatString: "0.##\"%\"", dataPoints: dps});
  chart.data[1].set("axisYType", "secondary", false);
  chart.axisY[0].set("maximum", Math.round(yTotal / 1000) * 1000);
  chart.axisY2[0].set("maximum", 100);
}

function chartInstance(chart: any) {
  chartJs.value = chart.chart;
  createPareto();
}
</script>

<!--<template>-->
<!--  <div>-->
<!--    <h2>Análisis de Pareto: Problemas para encontrar empleo</h2>-->
<!--    <div v-for="(pregunta, index) in preguntas" :key="index">-->
<!--      <label>{{ `${index+1}.- ${ pregunta.label }` }}</label>-->
<!--      <input type="number" min="1" max="100" v-model="pregunta.y" :name="`pre-${index}`">-->
<!--    </div>-->
<!--    <div>-->
<!--      <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance" />-->
<!--      &lt;!&ndash;      <canvas ref="chartCanvas"></canvas>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<!--<script setup lang="ts">-->
<!--import { onMounted, ref } from 'vue'-->
<!--import CanvasJSChart from '@canvasjs/vue-charts';-->
<!--import type { ChartOptions, DataPoint, StyleOptions } from '@/interfaces/Chart'-->
<!--// import { Chart, registerables } from 'chart.js'-->

<!--onMounted( () => {-->
<!--  preguntas.value.sort((a, b) => b.y! - a.y!)-->
<!--});-->

<!--// Chart.register(...registerables);-->
<!--const preguntas = ref<DataPoint[]>([-->
<!--  { label: '¿En qué medida crees que la falta de experiencia laboral contribuye a la dificultad de encontrar empleo para los recién graduados?', y: 0 },-->
<!--  { label: '¿Qué porcentaje de la competencia en el mercado laboral crees que se debe a la experiencia de los candidatos?', y: 0 },-->
<!--  { label: '¿Qué importancia le asignarías a las habilidades de comunicación en la capacidad de un recién graduado para conseguir trabajo (del 1 al 100)?', y: 0 },-->
<!--  { label: '¿Cuánto impacto crees que tiene el desconocimiento de las oportunidades laborales disponibles en la tasa de desempleo de los recién graduados?', y: 0 },-->
<!--  { label: 'En una escala del 1 al 100, ¿qué tan significativo consideras el papel de la falta de preparación para entrevistas en la falta de empleo para los recién graduados?', y: 0 },-->
<!--  { label: '¿Qué importancia le darías a la competencia con personas más experimentadas en la dificultad que enfrentan los recién graduados para encontrar trabajo (del 1 al 100)?', y: 0 },-->
<!--  { label: '¿Cuánto crees que contribuye la falta de actualización de habilidades requeridas por el mercado laboral al problema del desempleo juvenil?', y: 0 },-->
<!--  { label: '¿Qué porcentaje de la falta de empleo para los recién graduados atribuyes a la falta de orientación vocacional durante la educación universitaria?', y: 0 },-->
<!--  { label: 'En una escala del 1 al 100, ¿qué tan crítico consideras que es el impacto del ambiente económico general en las oportunidades laborales para los recién graduados?', y: 0 },-->
<!--  { label: '¿Qué porcentaje de la falta de empleo para los recién graduados crees que se debe a la falta de flexibilidad para adaptarse a diferentes roles?', y: 0 },-->
<!--  ]);-->

<!--const calcularTotal = () => {-->
<!--  let total = 0;-->
<!--  for (const pregunta of preguntas.value) {-->
<!--    total += pregunta.y!;-->
<!--  }-->
<!--  return total;-->
<!--};-->

<!--const options: ChartOptions = {-->
<!--  title: {-->
<!--    text: "Análisis de Pareto: Problemas para encontrar empleo"-->
<!--  },-->
<!--  axisY: {-->
<!--    title: "Porcentaje acumulado",-->
<!--    suffix: "%",-->
<!--  },-->
<!--  axisX: {-->
<!--    title: "Problemas",-->
<!--    labelAngle: -30-->
<!--  },-->
<!--  data: [-->
<!--    {-->
<!--      type: "column",-->
<!--      name: "Problemas",-->
<!--      dataPoints: preguntas.value-->
<!--    }-->
<!--  ],-->
<!--};-->

<!--const styleOptions: StyleOptions = {-->
<!--    width: "100%",-->
<!--    height: "400px"-->
<!--  }-->

<!--const chartJs = ref<any>(null);-->
<!--function createPareto(){-->
<!--  let dps = [];-->
<!--  let chart = chartJs;-->
<!--  let yValue, yTotal = 0, yPercent = 0;-->
<!--  for(let i = 0; i < chart.value.data[0].dataPoints.length; i++)-->
<!--    yTotal += chart.value.data[0].dataPoints[i].y;-->
<!--  for(let i = 0; i < chart.value.data[0].dataPoints.length; i++){-->
<!--    yValue = chart.value.data[0].dataPoints[i].y;-->
<!--    yPercent += (yValue / yTotal * 100);-->
<!--    dps.push({label: chart.value.data[0].dataPoints[i].label, y: yPercent});-->
<!--  }-->
<!--  chart.value.addTo("data",{type:"line", yValueFormatString: "0.##\"%\"", dataPoints: dps});-->
<!--  chart.value.data[1].set("axisYType", "secondary", false);-->
<!--  chart.value.axisY[0].set("maximum", Math.round(yTotal / 1000) * 1000);-->
<!--  chart.value.axisY2[0].set("maximum", 100);-->
<!--}-->

<!--function chartInstance(chart: any) {-->
<!--  chart.value = chart;-->
<!--  createPareto();-->
<!--}-->
<!--</script>-->
