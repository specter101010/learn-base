<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import semesters from "@/data/semesters" // ✅ ambil dari file data

const router = useRouter()

const darkMode = ref(false)

onMounted(() => {
  darkMode.value = localStorage.getItem("darkMode") === "true"
})

function openSemester(id) {
  router.push(`/semester/${id}`)
}
</script>

<template>
<div class="min-h-screen transition-all duration-500
bg-[#f0f2f5] dark:bg-[#111b21]
text-gray-800 dark:text-[#e9edef]">

  <!-- NAVBAR -->
  <nav class="flex justify-between items-center px-6 py-4
  bg-white/80 dark:bg-[#202c33]/80 backdrop-blur shadow">

    <h1 class="font-bold text-xl text-[#25D366]">
      Pilih Semester
    </h1>

    <button
      @click="$router.push('/')"
      class=" text-[#25D366] px-4 py-2 hover:text-[#128C7E] transition">
      ← Profile
    </button>

  </nav>


  <!-- HEADER -->
  <section class="text-center py-12 px-6">

    <h2 class="text-3xl md:text-4xl font-bold mb-3">
      Daftar Semester
    </h2>

    <p class="opacity-70">
      Pilih semester untuk melihat daftar mata kuliah dan modul pembelajaran
    </p>

  </section>


  <!-- GRID -->
  <section class="px-6 md:px-16 pb-20">

    <div class="grid
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    gap-6">

      <div
        v-for="semester in semesters"
        :key="semester.id"
        @click="openSemester(semester.id)"

        class="group cursor-pointer
        bg-white dark:bg-[#202c33]
        rounded-2xl p-6 shadow-lg
        hover:shadow-2xl hover:scale-105 transition-all">

        <div class="mb-4">

          <div class="
          w-14 h-14 bg-[#25D366]
          rounded-xl flex items-center justify-center
          text-white text-xl font-bold">

            {{ semester.id }}

          </div>

        </div>

        <h3 class="text-xl font-semibold mb-1">
          Semester {{ semester.id }}
        </h3>

        <p class="opacity-70 text-sm">
          Total SKS: {{ semester.sks }}
        </p>

      </div>

    </div>

  </section>


  <footer class="text-center pb-6 opacity-60">
    © 2026 Modul Belajar
  </footer>

</div>
</template>
