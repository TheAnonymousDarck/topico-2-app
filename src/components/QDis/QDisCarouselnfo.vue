<script setup lang="ts">
import { ref } from 'vue'
import { FwbTab, FwbTabs, FwbCard  } from 'flowbite-vue'

const activeTab = ref('first')
</script>
<template>
  <fwb-tabs v-model="activeTab" class="p-5">
    <fwb-tab name="first" title="Inicio">
      <fwb-card
        img-alt="Desk"
        img-src="https://cdn.bookey.app/20211014162443896/20211014162607506.jpg"
        variant="horizontal"
      >
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Introducción
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Es un libro escrito por Peter Senge que se centra en la creación de organizaciones que son capaces de aprender y adaptarse continuamente.
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Publicado en 1990, el libro es un pilar fundamental en el campo de la gestión del conocimiento y el desarrollo organizacional.
          </p>
        </div>
      </fwb-card>
    </fwb-tab>
    <fwb-tab name="second" title="La Quinta Disciplina">
      <fwb-card
        img-alt="Desk"
        img-src="https://cdn.bookey.app/20211014162443896/20211014162607506.jpg"
        variant="horizontal"
      >
        <div class="p-5">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            La "quinta disciplina"
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Se refiere al pensamiento sistémico, que es una forma de ver y entender las organizaciones como sistemas interrelacionados.
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Esta disciplina se complementa con otras cuatro disciplinas que Senge considera esenciales para crear una organización que aprende.
          </p>
        </div>
      </fwb-card>
    </fwb-tab>
    <fwb-tab name="third" title="Las Cinco Disciplinas">
      <div class="p-6 bg-white rounded-2xl">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Las Cinco Disciplinas
        </h5>
        <div class="grid grid-cols-8 gap-4">
          <div class="grid row-span-4 col-span-2 items-center justify-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgKZu21WK-a4Gsjtd2OYIfhjxmGmocBoaIwdtPCBzXQ&s" alt="img">
          </div>
          <div class="col-span-2 text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Dominio Personal:</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Fomentar el desarrollo personal continuo de los empleados, lo que implica aclarar y profundizar continuamente nuestra visión personal, concentrar nuestras energías, desarrollar paciencia y ver la realidad objetivamente.
            </p>
          </div>
          <div class="col-span-2 text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Modelos Mentales: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Reconocer y desafiar nuestras suposiciones y patrones de pensamiento internos que influyen en cómo interpretamos el mundo y actuamos en él.
            </p>
          </div>
          <div class="col-span-2 text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Visión Compartida: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Construir un sentido de compromiso en un grupo, desarrollando imágenes compartidas del futuro que queremos crear y los principios y prácticas que nos guiarán en ese camino.
            </p>
          </div>
          <div class="col-span-2 text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Aprendizaje en Equipo:</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Fomentar la capacidad del equipo para desarrollar una inteligencia colectiva y utilizar la conversación y el diálogo para coordinar esfuerzos y solucionar problemas de manera efectiva.
            </p>
          </div>
          <div class="col-span-2 text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Pensamiento Sistémico: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              La quinta disciplina, que integra las otras cuatro, enfocándose en ver el todo y las interrelaciones en lugar de partes aisladas.</p>
          </div>
        </div>
      </div>
    </fwb-tab>
    <fwb-tab name="quarta" title="Organización que Aprende">
      <fwb-card
        img-alt="Desk"
        img-src="https://cdn-icons-png.flaticon.com/512/4185/4185714.png"
        variant="horizontal"
      >
        <div class="p-3">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            La Teoría de la Organización que Aprende
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-pretty mb-2">
            Para que las organizaciones prosperen en un entorno complejo y cambiante, deben transformarse en "organizaciones que aprenden".
          </p>
          <p class="font-normal text-gray-700 dark:text-gray-400 text-pretty">
            Estas son organizaciones donde las personas continuamente expanden su capacidad para crear los resultados que realmente desean, donde se cultivan nuevos patrones de pensamiento, donde la aspiración colectiva es libre y donde las personas están continuamente aprendiendo a aprender en conjunto.
          </p>
        </div>
      </fwb-card>
    </fwb-tab>
    <fwb-tab name="quinta" title="Pensamiento Sistémico">
      <fwb-card
        img-alt="Desk"
        img-src="https://cdn-icons-png.flaticon.com/512/775/775497.png"
        variant="horizontal"
      >
        <div class="p-3">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Principios del Pensamiento Sistémico
          </h5>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Retroalimentación: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Comprender cómo las acciones de diferentes partes de un sistema afectan al todo.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Causa y Efecto: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Reconocer que las causas y los efectos en sistemas complejos no siempre están cercanos en el tiempo y el espacio.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Arquetipos de Sistemas: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Identificar patrones recurrentes en el comportamiento de los sistemas que pueden proporcionar una visión sobre cómo resolver problemas crónicos.
            </p>
          </div>
        </div>
      </fwb-card>
    </fwb-tab>
    <fwb-tab name="sexta" title="Conclusiones">
      <fwb-card
        img-alt="Desk"
        img-src="https://cdn-icons-png.flaticon.com/512/6863/6863897.png"
        variant="horizontal"
      >
        <div class="p-3">
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Importancia del Pensamiento Sistémico:</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Ver la organización como un todo interconectado permite abordar problemas complejos de manera más efectiva y prever las consecuencias de las decisiones a largo plazo.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Necesidad de una Visión Compartida:</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Las organizaciones prosperan cuando sus miembros comparten una visión común que guía sus acciones y decisiones, creando cohesión y compromiso.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Desarrollo del Aprendizaje en Equipo: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Los equipos que aprenden juntos, que dialogan abierta y honestamente, pueden enfrentar desafíos de manera más innovadora y eficaz.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Dominio Personal y Modelos Mentales: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Fomentar el crecimiento personal y desafiar las propias suposiciones permite a los individuos y a la organización adaptarse y evolucionar continuamente.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Práctica Continua: </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Convertirse en una organización que aprende no es un objetivo a alcanzar sino un proceso continuo de mejora y adaptación.
            </p>
          </div>
        </div>
      </fwb-card>
    </fwb-tab>
    <fwb-tab name="sept" title="Actividad">
      <fwb-card
        img-alt="Desk"
        img-src="https://cdn-icons-png.flaticon.com/512/8291/8291179.png"
        variant="horizontal"
      >
        <div class="p-4">
          <h5 class="mt-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Identificación de Áreas de Mejora: </h5>

          <div class="text-pretty">
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Identificar áreas en su propia organización (o en un contexto específico) que podrían beneficiarse de la implementación de las cinco disciplinas.
            </p>
          </div>
          <div class="text-pretty">
            <h5 class="mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Desarrollo del Plan de Acción:</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Se debe desarrollar un plan de acción detallado que incluya:
              <ul class="font-normal text-gray-700 dark:text-gray-400 list-disc list-inside text-pretty">
                <li>Objetivos específicos.</li>
                <li> Pasos necesarios para implementar cada disciplina.</li>
                <li>Recursos necesarios.</li>
                <li>Posibles obstáculos y cómo superarlos.</li>
                <li>Indicadores de éxito. </li>
              </ul>
            </p>
          </div>
        </div>
      </fwb-card>
    </fwb-tab>
  </fwb-tabs>
</template>