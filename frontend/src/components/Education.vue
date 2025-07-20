<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const educationHistory = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="pendidikan" class="py-20 bg-white/5 backdrop-blur-sm relative">
    <!-- Decorative elements for Education section -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Background shapes - more subtle -->
      <div class="absolute top-1/6 left-1/12 w-24 h-24 bg-gradient-to-r from-2596be/5 to-145369/5 rounded-full blur-lg"></div>
      <div class="absolute bottom-1/6 right-1/12 w-20 h-20 bg-gradient-to-r from-145369/5 to-041014/5 rounded-full blur-lg"></div>
      
      <!-- Decorative lines - more subtle -->
      <div class="absolute top-1/4 left-0 w-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent"></div>
      
      <!-- Corner decorations - more subtle -->
      <div class="absolute top-8 left-8 w-4 h-4 border-l border-t border-white/10"></div>
      <div class="absolute top-8 right-8 w-4 h-4 border-r border-t border-white/10"></div>
      <div class="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-white/10"></div>
      <div class="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-white/10"></div>
      
      <!-- Floating dots - more subtle -->
      <div class="absolute top-1/3 left-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="Riwayat Pendidikan" />
      <div class="timeline-modern mt-16">
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="timeline-item flex"
          :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'"
        >
          <div class="w-full md:w-5/12 mb-8 md:mb-0">
            <div class="glass rounded-2xl p-6 card-hover relative">
              <!-- Decorative elements inside cards - more subtle -->
              <div class="absolute top-2 right-2 w-4 h-4 bg-gradient-to-r from-2596be/10 to-145369/10 rounded-full"></div>
              <div class="absolute bottom-2 left-2 w-3 h-3 bg-gradient-to-r from-145369/10 to-041014/10 rounded-full"></div>
              
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-gradient-to-r from-2596be to-145369 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-bold text-lg">🎓</span>
                </div>
                <div>
                  <p class="font-semibold text-2596be text-sm">{{ edu.period }}</p>
                  <h3 class="text-xl font-bold text-gray-800">{{ edu.institution }}</h3>
                </div>
              </div>
              <p class="text-gray-600 leading-relaxed">{{ edu.major }}</p>
            </div>
          </div>
          <div class="hidden md:flex w-2/12 justify-center items-center">
            <div class="timeline-dot"></div>
          </div>
          <div class="md:hidden w-full flex justify-center mb-4">
            <div class="timeline-dot"></div>
          </div>
          <div class="w-full md:w-5/12"></div>
        </div>
      </div>
    </div>
  </section>
</template>
