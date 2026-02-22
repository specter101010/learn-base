<script setup>
import { ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router"

import modulesData from "@/data/modules.js"

const route = useRoute()
const router = useRouter()

const courseId = route.params.id

// search input
const search = ref("")


// ambil modul berdasarkan courseId
const modules = computed(() => {
  return modulesData[courseId] || []
})


// filter search
const filteredModules = computed(() =>
  modules.value.filter(module =>
    module.title.toLowerCase().includes(search.value.toLowerCase())
  )
)


function openModule(module) {
    router.push(`/modul/${courseId}/${module.id}`)
}
</script>

<template>
<div class="min-h-screen
bg-[#f0f2f5] dark:bg-[#111b21]
text-gray-800 dark:text-[#e9edef]">

  <!-- NAVBAR -->
  <nav class="flex justify-between items-center
  px-6 py-4
  bg-white/80 dark:bg-[#202c33]/80 backdrop-blur shadow">

    <h1 class="font-bold text-xl text-[#25D366]">
      Modul Pembelajaran
    </h1>

    <button
      @click="$router.back()"
      class="bg-[#25D366] text-white px-4 py-2 rounded-lg">
      ← Mata Kuliah
    </button>

  </nav>


  <!-- HEADER -->
  <section class="px-6 py-8">

    <h2 class="text-2xl font-bold mb-4">
      Daftar Modul
    </h2>


    <!-- SEARCH -->
    <input
      v-model="search"
      placeholder="Cari modul..."
      class="w-full md:w-96
      px-4 py-2 rounded-lg
      bg-white dark:bg-[#202c33]
      border border-gray-300 dark:border-gray-600
      focus:outline-none focus:ring-2 focus:ring-[#25D366]"
    />

  </section>



  <!-- MODULE LIST -->
  <section class="px-6 md:px-20 pb-20">

    <div class="grid gap-5">

      <div
        v-for="module in filteredModules"
        :key="module.id"
        @click="openModule(module)"
        class="group cursor-pointer
        flex gap-5 items-center
        bg-white dark:bg-[#202c33]
        p-4 rounded-xl shadow-md
        hover:shadow-xl hover:scale-[1.02]
        transition">

        <!-- COVER -->
        <img
          :src="module.image"
          class="w-20 h-20 object-cover rounded-lg"
        />


        <!-- INFO -->
        <div class="flex-1">

          <h3 class="font-semibold text-lg">
            {{ module.title }}
          </h3>

          <p class="opacity-70 text-sm">
            {{ module.desc }}
          </p>

          <span class="text-[#25D366] text-sm font-semibold">
            {{ module.type }}
          </span>

        </div>


        <!-- BUTTON -->
        <div class="text-[#25D366]
        opacity-0 group-hover:opacity-100 transition">

          Buka →
        </div>

      </div>

    </div>

  </section>

</div>
</template>
