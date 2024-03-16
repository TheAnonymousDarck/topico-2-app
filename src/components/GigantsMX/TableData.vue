<script setup lang="ts">
import {
    FwbTable,
    FwbTableBody,
    FwbTableCell,
    FwbTableHead,
    FwbTableHeadCell,
    FwbTableRow,
    FwbImg
} from 'flowbite-vue';

const imgs = [
    'Empresas',
    'https://elceo.com/wp-content/uploads/2023/03/empresas-slim-fotoartcl.jpg',
    'https://tujovialuni.files.wordpress.com/2010/10/nuestrasmarcasbimbo.png',
    'https://www.altonivel.com.mx/assets/images/Estructura_V3/Negocios/Empresarios/Lorenzo-Zambrano(1).jpg'
];

const tableData = [
    ['Visión empresarial', 'Visión global y estratégica para identificar oportunidades de inversión y negocios', 'Claridad en los objetivos a largo plazo y adaptabilidad a cambios del mercado', 'Enfoque en la innovación y la expansión global de la empresa'],
    ['Determinación', 'Persistencia y resiliencia ante desafíos y adversidades', 'Firmeza en la toma de decisiones y compromiso con valores éticos', 'Voluntad para llevar a cabo grandes proyectos y enfrentar retos'],
    ['Liderazgo', 'Capacidad para inspirar y motivar a equipos de trabajo', 'Estilo de liderazgo participativo y fomento del trabajo en equipo', 'Habilidad para delegar responsabilidades y empoderar a colaboradores'],
    ['Estrategia', 'Planificación meticulosa y análisis de riesgos', 'Enfoque en la diferenciación de productos y diversificación de la cartera', 'Aplicación de estrategias competitivas para el crecimiento sostenido'],
    ['Innovación', 'Promoción de la investigación y desarrollo tecnológico', 'Fomento de la creatividad y la mejora continua en procesos y productos', 'Adopción de tecnologías de vanguardia para mejorar la eficiencia'],
    ['Adaptabilidad', 'Flexibilidad para ajustarse a cambios del entorno económico y político', 'Adaptación a nuevas tendencias de consumo y regulaciones del mercado', 'Capacidad para transformar la empresa y diversificar su actividad'],
    ['Ética empresarial', 'Compromiso con la transparencia y responsabilidad social corporativa', 'Énfasis en la integridad y el respeto en todas las operaciones comerciales', 'Promoción de valores éticos y responsabilidad ambiental'],
    ['Networking', 'Establecimiento de relaciones estratégicas con líderes políticos y empresariales', 'Cultivo de alianzas con proveedores y distribuidores clave', 'Creación de una extensa red de contactos a nivel internacional'],
    ['Resolución de problemas', 'Habilidad para identificar y resolver obstáculos en el camino', 'Enfoque en la búsqueda de soluciones creativas y eficientes', 'Destreza para enfrentar crisis y tomar decisiones acertadas'],
    ['Resiliencia', 'Capacidad para recuperarse de fracasos y mantener la confianza en sí mismo', 'Tolerancia a la adversidad y capacidad para aprender de errores', 'Fortaleza ante situaciones difíciles y capacidad para superar obstáculos']
];

</script>
<template>
    <div>
        <FwbTable hoverable>
            <FwbTableHead>
                <FwbTableHeadCell>Cualidad</FwbTableHeadCell>
                <FwbTableHeadCell>Carlos Slim</FwbTableHeadCell>
                <FwbTableHeadCell>Lorenzo Servitje</FwbTableHeadCell>
                <FwbTableHeadCell>Lorenzo Zambrano</FwbTableHeadCell>
            </FwbTableHead>
            <FwbTableBody>
                <FwbTableRow>
                    <FwbTableCell>{{ imgs[0] }}</FwbTableCell>
                    <FwbTableCell>
                        <FwbImg alt="flowbite-vue" size="w-28" alignment="mx-auto" :src="imgs[1]" />
                    </FwbTableCell>
                    <FwbTableCell>
                        <FwbImg alt="flowbite-vue" size="w-28" alignment="mx-auto" :src="imgs[2]" />
                    </FwbTableCell>
                    <FwbTableCell>
                        <FwbImg alt="flowbite-vue" size="w-28" alignment="mx-auto" :src="imgs[3]" />
                    </FwbTableCell>
                </FwbTableRow>
                <FwbTableRow v-for="(row, index) in tableData" :key="index">
                    <FwbTableCell v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</FwbTableCell>
                </FwbTableRow>
            </FwbTableBody>
        </FwbTable>
    </div>
</template>