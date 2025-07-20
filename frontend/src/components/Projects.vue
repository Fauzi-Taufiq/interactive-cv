<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const projects = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects')
    projects.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="proyek" class="py-20 bg-white/5 backdrop-blur-sm relative">
    <!-- Decorative elements for Projects section -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Background shapes - more subtle -->
      <div class="absolute top-1/6 left-1/12 w-32 h-32 bg-gradient-to-r from-2596be/5 to-145369/5 rounded-full blur-lg"></div>
      <div class="absolute bottom-1/6 right-1/12 w-28 h-28 bg-gradient-to-r from-145369/5 to-041014/5 rounded-full blur-lg"></div>
      
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
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div
          v-for="project in projects"
          :key="project.title"
          class="glass rounded-2xl overflow-hidden card-hover group relative"
        >
          <!-- Decorative elements inside cards - more subtle -->
          <div class="absolute top-3 right-3 w-4 h-4 bg-gradient-to-r from-2596be/10 to-145369/10 rounded-full z-20"></div>
          <div class="absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-r from-145369/10 to-041014/10 rounded-full z-20"></div>
          
          <div class="relative overflow-hidden">
            <img 
              :src="project.image" 
              alt="Gambar Proyek" 
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-2596be transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4 leading-relaxed">{{ project.description }}</p>
            <div class="mb-6 flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="bg-gradient-to-r from-2596be/10 to-145369/10 text-2596be text-xs font-semibold px-3 py-1 rounded-full border border-2596be/20"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center text-2596be font-semibold hover:text-145369 transition-colors duration-300 group/link"
            >
              Lihat Detail
              <span class="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
