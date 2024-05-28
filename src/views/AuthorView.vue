<script setup lang="ts">
import { interestAuthor } from '@/assets/data/authorImg';
import { FwbButton } from 'flowbite-vue'
import router from '@/router'
import CardImageInfo from '@/components/CardImageInfo.vue'

const goBack = () => router.back();
</script>
<template>
<div>
  <main class="min-h-screen bg-blueGray-50">
    <section class="relative block h-96 bg-amber-500">

      <div class="absolute top-0 w-full h-full bg-center bg-cover" style="
            background-image: url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80');
          ">
        <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style="transform: translateZ(0px)">
        <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 2560 100" x="0" y="0">
          <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>

    <section class="relative py-16 bg-blueGray-200">
      <div class="container mx-auto px-4">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div class="px-6">
              <div class="pt-5">
            <FwbButton color="green" @click="goBack()" >
              Regresar
            </FwbButton>
              </div>
            <div class="flex flex-wrap justify-center">
              <div class="w-full  flex justify-center">
                <div class="relative">
                  <img alt="" src="/src/assets/img/author/file.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-24 -mr-20  max-w-56">
                </div>
              </div>
            </div>
            <div class="h-20"></div>
            <div class="text-center mt-24">
              <h3 class="text-4xl font-semibold leading-normal text-blueGray-700 mb-2">
                David Enrique Resendiz Nuñez
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Ingeniero de software
              </div>
              <div class="mb-2 text-blueGray-600">
                <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>Universidad Autonoma de Queretaro
              </div>
            </div>
            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Aquí un poco acerca de mi.
                    </p>
                  <div class="flex flex-wrap -m-4">
                    <CardImageInfo  v-for="(inter, index) in  interestAuthor " :key="index" :img-src=inter.url :alt=inter.title :interest=inter.interest />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-6/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Hecho con  <a href="https://vuejs.org/" class="text-transparent bg-clip-text bg-gradient-to-r from-[#42b883] to-[#35495e]" target="_blank">Vue JS</a> y <a href="https://tailwindcss.com/" class="bg-clip-text text-[#38bdf8]" target="_blank"> Tailwind Css</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>

  </main>
</div>
</template>
<style scoped>

</style>