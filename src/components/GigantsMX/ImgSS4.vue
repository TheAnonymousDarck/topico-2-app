<script setup lang="ts">
import { ref } from 'vue';
import { FwbButton, FwbModal } from 'flowbite-vue';

interface Content {
    part: string;
    content: [
        {
            title: string;
            text: string;
        }
    ];
}
const isShowModal = ref(false)
const closeModal = () => isShowModal.value = !isShowModal.value;

const data: Content[] = [
    {
        part: 'cabeza',
        content: [
            { title: 'Visión empresarial', text: 'Los tres líderes tenían una visión clara y ambiciosa para sus respectivas empresas, lo que les permitió identificar oportunidades y dirigir sus organizaciones hacia el éxito a largo plazo.' },
            { title: 'Innovación', text: 'Todos demostraron una capacidad para innovar en sus respectivos campos, ya sea en tecnología (Carlos Slim), productos alimenticios (Lorenzo Servitje) o industria del cemento (Lorenzo Zambrano), lo que les permitió mantenerse relevantes y competitivos en sus mercados.' },
            { title: 'Ética y valores empresariales', text: 'Los tres líderes demostraron un compromiso con altos estándares éticos y valores empresariales sólidos, lo que contribuyó a construir la confianza tanto dentro como fuera de sus organizaciones.' },
        ]
    },
    {
        part: 'cola',
        content: [
            { title: 'Resiliencia', text: 'A lo largo de sus carreras, enfrentaron desafíos significativos y momentos difíciles, pero demostraron una notable capacidad para recuperarse y seguir adelante con determinación.' },
            { title: 'Adaptabilidad', text: 'Estaban dispuestos a adaptarse a los cambios del entorno empresarial y a ajustar sus estrategias según fuera necesario para mantener la competitividad y el éxito de sus empresas.' },
        ]
    },
    {
        part: 'pierna izquierda',
        content: [
            { title: 'Liderazgo efectivo', text: 'Cada uno de ellos era un líder carismático y efectivo que inspiraba a sus equipos a alcanzar metas ambiciosas y a trabajar hacia una visión compartida.' },
            { title: 'Enfoque en la calidad', text: 'Los tres líderes compartían un compromiso inquebrantable con la excelencia y la calidad en sus productos y servicios, lo que contribuyó a construir la reputación de sus empresas.' },

        ]
    },
    {
        part: 'pierna derecha',
        content: [
            { title: 'Gestión financiera sólida', text: 'Demostraron habilidades sólidas en la gestión de los recursos financieros de sus empresas, lo que les permitió mantener la estabilidad y el crecimiento económico a largo plazo.' },
        ]
    },
    {
        part: 'brazo izquierda',
        content: [
            { title: 'Networking y relaciones efectivas', text: 'Cada uno cultivó redes de contactos sólidas y estableció relaciones efectivas con otras figuras importantes en el mundo empresarial, lo que les permitió acceder a oportunidades y recursos clave.' },
        ]
    },
    {
        part: 'brazo derecha',
        content: [
            { title: 'Responsabilidad social empresarial', text: 'Reconocían la importancia de contribuir al desarrollo de sus comunidades y adoptaron prácticas empresariales socialmente responsables.' },
        ]
    },
];

let modalContent = [{ title: '', text: '' }];

const handleButtonClick = (part: string) => {
    const partData = data.find(item => item.part === part);
    if (partData) {
        modalContent = partData.content[0]; // Aquí podrías definir qué contenido mostrar, por ejemplo [0] sería el primer contenido de la lista.
        isShowModal.value = true;
    }
};
</script>
<template>
    <div class="relative">
        <img src="https://i.ytimg.com/vi/7WefSXgGOkI/sddefault.jpg" alt="AMLO Supersaijajin 4">
        <FwbButton class="part-btn top-28 left-[358px]" @click="handleButtonClick('cabeza')" />
        <FwbButton class="part-btn top-72 left-[444px]" @click="handleButtonClick('pierna derecha')" />
        <FwbButton class="part-btn top-56 left-[554px]" @click="handleButtonClick('cola')" />
        <FwbButton class="part-btn top-96 left-64" @click="handleButtonClick('pierna izquierda')" />
        <FwbButton class="part-btn top-96 left-[410px]" @click="handleButtonClick('pierna izquierda')" />
        <FwbButton class="part-btn top-56 left-80" @click="handleButtonClick('brazo derecha')" />

        <FwbModal v-if="isShowModal" @close="closeModal">
            <template #header>
                <div class="flex items-center text-lg">
                    {{ modalContent.title }}
                </div>
            </template>
            <template #body>
                <p class="text-base leading-relaxed text-slate-600 dark:text-slate-500">
                    {{ modalContent.text }}
                </p>
            </template>
            <template #footer>
                <div class="flex justify-between">
                    <FwbButton @click="closeModal" color="green">
                        Siguiente
                    </FwbButton>
                </div>
            </template>
        </FwbModal>
    </div>
</template>
<style scoped>
.part-btn {
    @apply w-12 h-12 absolute bg-transparent;
    /* @apply w-12 h-12 absolute; */
}
</style>