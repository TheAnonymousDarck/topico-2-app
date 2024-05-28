<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false);
</script>

<template>
  <section class="px-12 pb-1">
    <div class="flex flex-col flex-wrap items-center w-full p-3 mt-5 shadow-md bg-slate-200 rounded-xl">
      <button @click="show = !show" class="text-3xl mb-5 font-bold">¿Que es la negociación?</button>
      <div v-show="show" class="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/G53UKgaQZCQ?si=laISGiz7PzvCaAL3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div v-show="!show" class="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
        <div class="mb-6">
          <p class="text-pretty">
            La Negociación se refiere a la habilidad y capacidad de un líder o directivo para negociar de manera efectiva en diversas situaciones.
          </p>
          <p class="text-pretty">
            Esta competencia es crucial para alcanzar acuerdos beneficiosos, resolver conflictos y manejar las relaciones internas y externas de una organización.
          </p>
          <p class="text-pretty">
            A continuación, se detallan los aspectos clave de esta competencia:
          </p>
          <h2 class="text-xl font-semibold mb-4 text-gray-700">Aspectos Clave</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>Preparación y Planificación:</strong> Investigación y análisis de la situación y de las partes involucradas, definición de objetivos claros y realistas, desarrollo de estrategias y tácticas de negociación.
            </li>
            <li>
              <strong>Comunicación Eficaz:</strong> Habilidad para escuchar activamente y entender las necesidades y preocupaciones de la otra parte, claridad y precisión en la exposición de argumentos, capacidad para preguntar y obtener información relevante.
            </li>
            <li>
              <strong>Construcción de Relaciones:</strong> Desarrollo de relaciones de confianza y respeto mutuo, mantenimiento de una actitud colaborativa, gestión de las emociones propias y de las otras partes involucradas.
            </li>
            <li>
              <strong>Resolución de Conflictos:</strong> Identificación de intereses comunes y áreas de acuerdo, capacidad para manejar desacuerdos y tensiones de manera constructiva, habilidad para encontrar soluciones creativas y mutuamente beneficiosas.
            </li>
            <li>
              <strong>Flexibilidad y Adaptabilidad:</strong> Capacidad para adaptarse a cambios y nuevas informaciones durante la negociación, disposición para modificar estrategias según las circunstancias, apertura para considerar diferentes perspectivas y enfoques.
            </li>
            <li>
              <strong>Toma de Decisiones:</strong> Evaluación de alternativas y sus posibles consecuencias, determinación de la mejor opción para alcanzar los objetivos establecidos, habilidad para cerrar acuerdos y formalizar compromisos.
            </li>
          </ul>
        </div>
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-4 text-gray-700">Beneficios de una Negociación Efectiva</h2>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Mejora de Relaciones:</strong> Fortalece las relaciones con socios, clientes, empleados y otras partes interesadas.</li>
            <li><strong>Optimización de Recursos:</strong> Ayuda a utilizar los recursos de manera más eficiente y efectiva.</li>
            <li><strong>Aumento de la Satisfacción:</strong> Aumenta la satisfacción de todas las partes involucradas al lograr acuerdos justos y equitativos.</li>
            <li><strong>Reducción de Conflictos:</strong> Minimiza los conflictos y facilita la resolución de disputas.</li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4 text-gray-700">Ejemplos de Aplicación</h2>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Negociaciones Comerciales:</strong> Acuerdos con proveedores, clientes, y socios comerciales.</li>
            <li><strong>Gestión de Equipos:</strong> Resolución de conflictos internos y negociación de recursos y responsabilidades.</li>
            <li><strong>Relaciones Laborales:</strong> Negociaciones con sindicatos y acuerdos laborales.</li>
            <li><strong>Fusiones y Adquisiciones:</strong> Procesos de adquisición y fusiones de empresas, incluyendo la negociación de términos y condiciones.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>