<template>
<!--  <div class="">-->
<!--    <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>-->
<!--  </div>-->
<!--  <div class="">-->
<!--    <FwbInput-->
<!--      v-model="qy1"-->
<!--      placeholder=""-->
<!--      label="¿En qué medida crees que la falta de experiencia laboral contribuye a la dificultad de encontrar empleo para los recién graduados?"-->
<!--    />-->
<!--    <FwbInput-->
<!--      v-model="qy2"-->
<!--      placeholder=""-->
<!--      label="¿Qué porcentaje de la competencia en el mercado laboral crees que se debe a la experiencia de los candidatos?"-->
<!--    />-->
<!--    <FwbInput-->
<!--      v-model="qy3"-->
<!--      placeholder=""-->
<!--      label="¿Qué importancia le asignarías a las habilidades de comunicación en la capacidad de un recién graduado para conseguir trabajo (del 1 al 100)?"-->
<!--    />-->
<!--    <FwbInput-->
<!--      v-model="qy4"-->
<!--      placeholder=""-->
<!--      label="¿Cuánto impacto crees que tiene el desconocimiento de las oportunidades laborales disponibles en la tasa de desempleo de los recién graduados?"-->
<!--    />-->
<!--    <FwbInput-->
<!--      v-model="qy5"-->
<!--      placeholder=""-->
<!--      label="En una escala del 1 al 100, ¿qué tan significativo consideras el papel de la falta de preparación para entrevistas en la falta de empleo para los recién graduados?"-->
<!--    />-->
<!--  </div>-->
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { FwbInput } from 'flowbite-vue'
// @ts-ignore
import CanvasJSChart from '@canvasjs/vue-charts';

// const qy1 = ref(0);
// const qy2 = ref(0);
// const qy3 = ref(0);
// const qy4 = ref(0);
// const qy5 = ref(0);

let chartU = null;
const options = {
  title:{
    text: "Restaurant Complaints"
  },
  axisY: {
    title: "Count of Complaints",
      lineColor: "#4F81BC",
      tickColor: "#4F81BC",
      labelFontColor: "#4F81BC"
  },
  axisY2: {
    title: "Percent",
      suffix: "%",
      lineColor: "#C0504E",
      tickColor: "#C0504E",
      labelFontColor: "#C0504E",
      includeZero: true
  },
  axisX: {
    title: "Type of Complaints",
      labelAngle: -90,
      labelMaxWidth: 70,
      labelTextAlign: "center"
  },
  data: [{
    type: "column",
    name: "Complaints",
    yValueFormatString: "#,##0",
    dataPoints: [
      { label: "Overpriced", y: 875 },
      { label: "Quantity", y: 648 },
      { label: "Wait Time", y: 153 },
      { label: "Tasteless", y: 78 },
      { label: "Ambience", y: 42 },
      { label: "Not Clean", y: 35 },
      { label: "Noisy", y: 23 },
      { label: "Unfriendly Staff", y: 17 }
    ]
  }]
}
const styleOptions = {
  width: "100%",
  height: "360px"
}


function createPareto(){
  let dps = [];
  let chart = chartU!
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

function chartInstance(chartP: any) {
  chartU = chartP;
  createPareto();
}

</script>

<style scoped>

</style>
