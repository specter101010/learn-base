<script setup>

import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import summary from "@/data/summary"

const route = useRoute()
const router = useRouter()

// ambil params dari URL
const courseId = computed(() => route.params.courseId)
const moduleId = computed(() => Number(route.params.moduleId))


// ambil module berdasarkan courseId dan moduleId
const moduleSummary = computed(() => {

  const modules = summary[courseId.value]

  if (!modules) return null

  return modules.find(
    module => module.id === moduleId.value
  )

})

</script>



<template>

<div class="min-h-screen
bg-[#f0f2f5]
dark:bg-[#111b21]
text-gray-800
dark:text-[#e9edef]">


  <!-- NAVBAR -->

  <nav class="flex justify-between items-center
  px-6 py-4
  bg-white
  dark:bg-[#202c33]
  shadow">

    <h1 class="font-bold text-xl text-[#25D366]">

      {{ moduleSummary?.title || "Modul" }}

    </h1>


    <button
      @click="router.back()"
      class="bg-[#25D366]
      text-white
      px-4 py-2
      rounded-lg
      hover:bg-[#128C7E]">

      ← Kembali

    </button>

  </nav>



  <!-- CONTENT -->

  <section class="max-w-3xl mx-auto px-6 py-10">


    <!-- MODULE FOUND -->

    <div v-if="moduleSummary">


      <div
        v-for="section in moduleSummary.sections"
        :key="section.id"
        class="mb-10"
      >


        <!-- IMAGE -->

        <img
          v-if="section.image"
          :src="section.image"
          class="w-full
          rounded-xl
          mb-4
          shadow-md"
        />


        <!-- DESCRIPTION -->

        <p class="leading-relaxed text-lg">

          {{ section.description }}

        </p>


      </div>


    </div>



    <!-- NOT FOUND -->

    <div v-else class="text-center opacity-60 py-10">

      Modul tidak ditemukan

    </div>


  </section>


</div>

</template>
