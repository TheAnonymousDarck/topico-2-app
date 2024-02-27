<script setup lang="ts">
import CardIndex from '@/components/CardIndex.vue';
import { useGetTools } from '@/composables/useGetTools'

interface CardDiagram {
    title: string;
    icon: string;
    color: string;
    route: string;
}
const { getIsCatwdaComplete, getIsFodaComplete, getIsParetoComplete, getIsIshikawaComplete, getIsSixHatsComplete,  } = useGetTools();

const cards: CardDiagram[] = [
    {
        title: 'Responder Encuesta',
        icon: 'https://cdn-icons-png.flaticon.com/512/3930/3930490.png',
        color: 'bg-slate-500',
        route: 'test-tools'
    },
    {
        title: 'FODA',
        icon: 'https://cdn-icons-png.flaticon.com/512/4215/4215672.png',
        color: 'bg-blue-500',
        route: 'foda'
    },
    {
        title: 'ishikawa',
        icon: 'https://cdn-icons-png.flaticon.com/512/1904/1904549.png',
        color: 'bg-pink-500',
        route: 'ishikawa'
    },
    {
        title: 'CATWDA',
        icon: 'https://cdn-icons-png.flaticon.com/256/10296/10296576.png',
        color: 'bg-green-500',
        route: 'catwda'
    },
    {
        title: 'pareto',
        icon: 'https://cdn-icons-png.flaticon.com/512/5082/5082000.png',
        color: 'bg-yellow-500',
        route: 'pareto'
    },
    {
        title: '6 Sombreros para pensar',
        icon: 'https://cdn-icons-png.flaticon.com/256/862/862965.png',
        color: 'bg-violet-500',
        route: 'six-hats'
    },
];


</script>

<template>
    <div class="flex flex-wrap items-center justify-center px-24">
        <CardIndex v-for="(card, index) in cards" :key="index" :title="card.title" :color="card.color" :imgSrc="card.icon"
            :routeName="card.route"/>
    </div>
</template>
