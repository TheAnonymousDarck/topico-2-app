<script setup lang="ts">
</script>

<template>
  <div>
    <section>
      <section class="sticky">

        <div class="max-w-lg px-4 pt-12 mx-auto text-left sm:pt-24 sm:pb-8 md:max-w-none md:text-center">

          <h1
            class="font-extrabold leading-10 tracking-tight  text-[#201515] text-center sm:leading-none text-5xl sm:text-9xl">
            <span class="inline md:block">
              Tópico II
            </span>
            <span class="relative font-semibold mt-2 text-5xl bg-clip-text text-[#201515] md:inline-block">
              Sistemas informaticos para la alta dirección
            </span>
          </h1>
        </div>


        <div class="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center">
          <div class='py-4 space-x-4 text-center '>

            <div class="">
              <RouterLink :to="{ name: 'first-partial-index' }"
                class="backdrop-blur-sm transition duration-500 ease-in-out bg-indigo-500 border border-[#E2E8F0] translate-y-1 text-white hover:bg-indigo-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span> Primer parcial</span>
              </RouterLink>
              <!-- <RouterLink :to="{ name: 'second-partial-index' }" disabled
                class="backdrop-blur-sm transition duration-500 ease-in-out bg-indigo-500 border border-[#E2E8F0] translate-y-1 text-white hover:bg-indigo-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span> Segundo parcial</span>
              </RouterLink> -->
              <RouterLink :to="{ name: 'author' }"
                class="ml-2 backdrop-blur-sm transition duration-500 ease-in-out bg-indigo-500 border border-[#E2E8F0] translate-y-1 text-white hover:bg-indigo-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
                <span> Autor </span>
              </RouterLink>
            </div>

            <!-- <button
              class="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-3 px-6 rounded-3xl inline-flex items-center">
              <span> Autor </span>
            </button> -->
          </div>
        </div>

      </section>
    </section>


    <div class="text-left">

      <div class="mt-32" />

      <section>

      </section>

    </div>
  </div>
</template>