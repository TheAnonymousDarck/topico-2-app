<script setup lang="ts">
defineProps<{
  imgSrc: string,
  alt: string,
  interest: string
}>();
</script>

<template>

    <div class="lg:w-1/3 sm:w-1/2 p-4 ">
      <div class="flex relative">
        <img :alt="alt" class="absolute inset-0 w-full h-full object-cover object-center rounded-lg" :src="imgSrc">
        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-blue-950 opacity-0 hover:opacity-100 rounded-lg">
<!--          <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-5"></h2>-->
          <p class="leading-relaxed p-6 text-slate-300">{{ interest }}</p>
        </div>
      </div>
    </div>

</template>

<style scoped>

</style>