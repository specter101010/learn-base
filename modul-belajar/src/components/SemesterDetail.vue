<script setup>
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import courses from "@/data/courses"

const router = useRouter()
const route = useRoute()

// semester dari URL
const semester = computed(() => Number(route.params.id))

// ambil courses berdasarkan semester
const filteredCourses = computed(() => {
  return courses[semester.value] || []
})

function openCourse(courseId) {
  router.push(`/course/${courseId}`)
}
</script>

<template>
<div class="min-h-screen
bg-[#f0f2f5] dark:bg-[#111b21]
text-gray-800 dark:text-[#e9edef]
transition-all duration-500">

  <!-- NAVBAR -->
  <nav class="flex justify-between items-center
  px-6 py-4
  bg-white/80 dark:bg-[#202c33]/80 backdrop-blur shadow">

    <h1 class="font-bold text-xl text-[#25D366]">
      Semester {{ semester }}
    </h1>

    <button
      @click="$router.push('/semester')"
      class="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E]">
      ← Semester
    </button>

  </nav>


  <!-- HEADER -->
  <section class="px-6 py-10 text-center">

    <h2 class="text-3xl font-bold mb-2">
      Mata Kuliah Semester {{ semester }}
    </h2>

    <p class="opacity-70">
      Pilih mata kuliah untuk melihat modul pembelajaran
    </p>

  </section>


  <!-- LIST COURSE -->
  <section class="px-6 md:px-20 pb-20">

    <div class="grid gap-5">

      <div
        v-for="course in filteredCourses"
        :key="course.id"
        @click="openCourse(course.id)"
        class="group cursor-pointer
        flex gap-5 items-center
        bg-white dark:bg-[#202c33]
        p-4 rounded-xl shadow-md
        hover:shadow-xl hover:scale-[1.02]
        transition-all duration-300">

        <!-- IMAGE -->
        <img
          :src="course.image"
          class="w-24 h-24 object-cover rounded-lg shadow-md
          group-hover:scale-105 transition"
        />

        <!-- CONTENT -->
        <div class="flex-1">

          <div class="flex justify-between items-center mb-1">

            <h3 class="font-semibold text-lg">
              {{ course.name }}
            </h3>

            <span class="
            bg-[#25D366]/20 text-[#25D366]
            px-3 py-1 rounded-lg text-sm font-semibold">
              {{ course.sks }} SKS
            </span>

          </div>

          <p class="opacity-70 text-sm mb-2">
            {{ course.desc }}
          </p>

          <div class="
          text-[#25D366]
          font-semibold text-sm
          opacity-0 group-hover:opacity-100
          transition">
            Buka Modul →
          </div>

        </div>

      </div>

      <!-- EMPTY STATE -->
      <div v-if="filteredCourses.length === 0"
        class="text-center opacity-60 py-10">
        Tidak ada mata kuliah untuk semester ini
      </div>

    </div>

  </section>


  <footer class="text-center pb-6 opacity-60">
    © 2026 Modul Belajar
  </footer>

</div>
</template>
