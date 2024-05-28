<script setup lang="ts">
import { ref } from 'vue';
import CardInfography from '@/components/Infografias/CardInfography.vue'

const showCards = ref<boolean>(true);
const linksI = [
  'https://www.canva.com/design/DAF79_bgvfQ/yIJ15cM5djKIV80uKMNETg/edit?utm_content=DAF79_bgvfQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  'https://www.canva.com/design/DAF8B4fC_LM/8uUparWdpZ_VMGQZ1VYyQA/edit?utm_content=DAF8B4fC_LM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
  'https://www.canva.com/design/DAF8Bzros7M/B4Pewr-e3le2bDSwx4HT8g/edit?utm_content=DAF8Bzros7M&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
];

</script>

<template>
  <p class="mt-5 text-center">
    Para el primer parcial o primer evaluación se desarrollaron tres infografías.

    Dichas infografías se encuentran las cuales son las siguientes:
  </p>

  <br>
  <div class="flex flex-wrap items-center justify-center px-24 space-x-2" v-show="showCards">
    <a :href="linksI[0]" target="_blank">
      <CardInfography title="Decalogo" img="https://cdn-icons-png.flaticon.com/512/1529/1529061.png"
        pdfName="Decalogo.pdf" :link="linksI[0]" />
    </a>
    <a :href="linksI[1]">
      <CardInfography title="Efecto Pigmalión" img="https://cdn-icons-png.flaticon.com/512/2405/2405323.png"
        pdfName="pigmalion.pdf" :link="linksI[1]" />
    </a>
    <a :href="linksI[2]">
      <CardInfography title="Carlos Kazuga y Yokoi Kenji" img="https://cdn-icons-png.flaticon.com/512/203/203070.png"
        pdfName="Kazuga-Kenji.pdf" :link="linksI[2]" />
    </a>
  </div>

  <div class="text-center">
    <!-- <VuePDF :pdf="pdf" /> -->
  </div>

  <!-- <button @click="change">
    mostrar
  </button> -->
</template>
