<script lang="ts">
import { FwbInput } from 'flowbite-vue'
import { useParetoStore } from '@/stores/paretoStore'

export default {
  components: { FwbInput },
  data() {
    return {
      chart: null,
      qy1: 80,
      qy2: 90,
      qy3: 23,
      qy4: 50,
      qy5: 56,
      options: {
        title:{
          text: "Problemas para encontrar empleo despues de la universidad"
        },
        axisY: {
          title: "Porcentaje Acumulado",
          lineColor: "#4F81BC",
          tickColor: "#4F81BC",
          labelFontColor: "#4F81BC"
        },
        axisX: {
          title: "Problemas",
          labelAngle: -90,
          labelMaxWidth: 70,
          labelTextAlign: "center"
        },
        data: [{
          type: "column",
          name: "Problemas",
          yValueFormatString: "#,##0",
          dataPoints: [
            { label: "Falta de Experiencia", y: 80 },
            { label: "Competencia laboral", y:  90 },
            { label: "Habilidades", y: 23  },
            { label: "Desconocimiento de oportunidades", y: 50 },
            { label: "Falta de preparación en entrevistas", y:  56 },
          ]
        }]
      },
      styleOptions: {
        width: "100%",
        height: "430px"
      },
      saveQ(){
        useParetoStore().saveQ1(this.qy1);
        useParetoStore().saveQ2(this.qy2);
        useParetoStore().saveQ3(this.qy3);
        useParetoStore().saveQ4(this.qy4);
        useParetoStore().saveQ5(this.qy5);
      },
    }
  },
  methods: {
    createPareto(){
      let dps = [];
      let chart = this.chart;
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
      chart.axisY[0].set("maximum", Math.round(yTotal / 100) * 100);
    },
    chartInstance(chart: any) {
      this.chart = chart;
      this.createPareto();
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-6 gap-2">
    <div class="col-span-3">
<!--      <form @submit.prevent="saveQ()">-->

        <FwbInput
          v-model="qy1" disabled
          label="¿En qué medida crees que la falta de experiencia laboral contribuye a la dificultad de encontrar empleo para los recién graduados?"
        />
        <FwbInput
          v-model="qy2" disabled
          label="¿Qué porcentaje de la competencia en el mercado laboral crees que se debe a la experiencia de los candidatos?"
        />
        <FwbInput
          v-model="qy3" disabled
          label="¿Qué importancia le asignarías a las habilidades de comunicación en la capacidad de un recién graduado para conseguir trabajo (del 1 al 100)?"
        />
        <FwbInput
          v-model="qy4" disabled
          label="¿Cuánto impacto crees que tiene el desconocimiento de las oportunidades laborales disponibles en la tasa de desempleo de los recién graduados?"
        />
        <FwbInput
          v-model="qy5" disabled
          label="En una escala del 1 al 100, ¿qué tan significativo consideras el papel de la falta de preparación para entrevistas en la falta de empleo para los recién graduados?"
        />

<!--        <button @click="saveQ">-->
<!--          Guardar-->
<!--        </button>-->
<!--      </form>-->
    </div>
    <div class="col-span-3">
      <CanvasJSChart :options="options" :style="styleOptions" @chart-ref="chartInstance"/>
    </div>
  </div>

</template>