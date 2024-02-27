  <script setup lang="ts">
  import HatColor from '@/components/TestTools/SixHats/HatColor.vue'
  import type { Hat } from '@/interfaces/Index'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { FwbBadge } from 'flowbite-vue'

  const hats: Hat[] = [
    {
      color: 'White',
      role: 'Hechos y cifras',
      data: [
        'Analizar estadísticas de desempleo juvenil',
        'requisitos de trabajorequisitos de trabajo'
      ]
    },
    {
      color: 'Red',
      role: 'Corazón y Emociones',
      data: [
        'Considerar cómo se sienten los recién graduados frente a la falta de empleo y cómo eso afecta su búsqueda',
      ]
    },
    {
      color: 'Black',
      role: 'Crítico',
      data: [
        'Identificar obstáculos y problemas que dificultan la inserción laboral de los jóvenes.',
      ]
    },
    {
      color: 'Yellow',
      role: 'Positivo',
      data: [
        'Buscar aspectos favorables en la situación, como el potencial de aprendizaje y crecimiento.',
      ]
    },
    {
      color: 'Green',
      role: 'Creatividad',
      data: [
        'Generar ideas innovadoras para mejorar las oportunidades de empleo para los recién graduados.',
      ]
    },
    {
      color: 'Blue',
      role: 'Gestión del proceso',
      data: [
        'Coordinar y planificar la aplicación de soluciones de manera eficiente y efectiva.',
      ]
    },
  ];
  </script>
  <template>
    <FwbBadge>
      <template #icon>
        <FontAwesomeIcon icon="fa-solid fa-info" />
        Puedes dar click a los sombreros
      </template>
    </FwbBadge>

    <div class="grid grid-cols-3 gap-2 mt-2">
      <HatColor v-for="(hat, index) in hats" :key="index" :hat="hat"/>
    </div>
  </template>
<style scoped></style>