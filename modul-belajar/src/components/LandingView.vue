<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const darkMode = ref(false)

onMounted(() => {
  const saved = localStorage.getItem("darkMode")
  darkMode.value = saved === "true"
  applyTheme()
})

function toggleDark() {
  darkMode.value = !darkMode.value
  localStorage.setItem("darkMode", darkMode.value)
  applyTheme()
}

function applyTheme() {
  if (darkMode.value) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

function goToSemester() {
  router.push("/semester")
}
</script>

<template>
<div class="min-h-screen transition-all duration-500
bg-[#f0f2f5] text-gray-800
dark:bg-[#111b21] dark:text-[#e9edef]">

  <!-- NAVBAR -->
  <nav class="flex justify-between px-6 py-4 sticky top-0">

  

    <button
      @click="toggleDark"
      class="bg-[#25D366] hover:bg-[#128C7E]
      px-4 py-2 rounded-lg text-white transition"
    >
      {{ darkMode ? "☀ Light" : "🌙 Dark" }}
    </button>

  </nav>


  <!-- HERO PROFILE -->
  <section class="flex flex-col md:flex-row items-center
  justify-center gap-12 px-6 py-20">

    <!-- FOTO -->
    <div class="relative">

      <div class="absolute inset-0
      bg-[#25D366] blur-3xl opacity-30 rounded-full">
      </div>

      <img
        src="./profile.png"
        class="relative w-48 h-48 object-cover
        rounded-full border-4 border-[#25D366]
        shadow-xl"
      />

    </div>


    <!-- INFO -->
    <div class="max-w-xl text-center md:text-left">

      <h1 class="text-4xl md:text-5xl font-bold mb-3">
        Faizul Khoir
      </h1>

      <p class="text-[#25D366] font-semibold mb-4">
        Mahasiswa Sistem Informasi • Semester 6
      </p>


      <p class="opacity-80 mb-6 leading-relaxed">
        Mahasiswa yang berfokus pada pengembangan sistem informasi,
        web development, dan teknologi modern. Halaman ini berisi
        rangkuman modul pembelajaran berdasarkan semester dan
        mata kuliah untuk mempermudah proses belajar secara terstruktur.
      </p>


      <!-- INFO CARD -->
      <div class="flex gap-6 justify-center md:justify-start mb-8">

        <div class="bg-white dark:bg-[#202c33]
        px-6 py-4 rounded-xl shadow">

          <p class="text-sm opacity-70">
            Semester
          </p>

          <p class="font-bold text-xl text-[#25D366]">
            6
          </p>

        </div>


        <div class="bg-white dark:bg-[#202c33]
        px-6 py-4 rounded-xl shadow">

          <p class="text-sm opacity-70">
            Total SKS
          </p>

          <p class="font-bold text-xl text-[#25D366]">
            24
          </p>

        </div>

      </div>



      <!-- BUTTON -->
      <button
        @click="goToSemester"
        class="bg-[#25D366]
        hover:bg-[#128C7E]
        px-8 py-3 rounded-xl
        text-white font-semibold
        shadow-lg hover:scale-105
        transition-all duration-300"
      >
        Buka Modul Pembelajaran →
      </button>


    </div>

  </section>



  <!-- SECTION PREVIEW -->
  <section class="px-6 md:px-20 pb-20">

    <div class="bg-white dark:bg-[#202c33]
    rounded-2xl shadow-lg p-8">

      <h2 class="text-2xl font-bold mb-6">
        Mata Kuliah Semester 6
      </h2>


      <div class="grid md:grid-cols-2 gap-4">

        <div class="p-4 rounded-lg bg-gray-100 dark:bg-[#111b21]">
          Administrasi Jaringan
        </div>

        <div class="p-4 rounded-lg bg-gray-100 dark:bg-[#111b21]">
          Sistem Informasi Perencanaan
        </div>

        <div class="p-4 rounded-lg bg-gray-100 dark:bg-[#111b21]">
          Analisis dan Visualisasi Data
        </div>

        <div class="p-4 rounded-lg bg-gray-100 dark:bg-[#111b21]">
          Arsitektur Enterprise
        </div>

      </div>

    </div>

  </section>



  <!-- FOOTER -->
  <footer class="text-center pb-6 opacity-60">
    © 2026 Faizul Khoir • Sistem Informasi
  </footer>


</div>
</template>
