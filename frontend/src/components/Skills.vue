<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'
const skills = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills')
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
<template>
  <section id="skill" class="py-20 bg-white/5 backdrop-blur-sm relative">
    <!-- Decorative elements for Skills section -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Background shapes - more subtle -->
      <div class="absolute top-1/6 right-1/12 w-28 h-28 bg-gradient-to-r from-2596be/5 to-145369/5 rounded-full blur-lg"></div>
      <div class="absolute bottom-1/6 left-1/12 w-24 h-24 bg-gradient-to-r from-145369/5 to-041014/5 rounded-full blur-lg"></div>
      
      <!-- Decorative lines - more subtle -->
      <div class="absolute top-1/3 right-0 w-20 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent"></div>
      <div class="absolute bottom-1/3 left-0 w-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <!-- Corner decorations - more subtle -->
      <div class="absolute top-8 left-8 w-4 h-4 border-l border-t border-white/10"></div>
      <div class="absolute top-8 right-8 w-4 h-4 border-r border-t border-white/10"></div>
      <div class="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-white/10"></div>
      <div class="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-white/10"></div>
      
      <!-- Floating dots - more subtle -->
      <div class="absolute top-1/4 right-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 left-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="glass rounded-2xl p-8 card-hover group relative"
        >
          <!-- Decorative elements inside cards - more subtle -->
          <div class="absolute top-3 right-3 w-4 h-4 bg-gradient-to-r from-2596be/10 to-145369/10 rounded-full"></div>
          <div class="absolute bottom-3 left-3 w-3 h-3 bg-gradient-to-r from-145369/10 to-041014/10 rounded-full"></div>
          
          <div class="flex items-center mb-6">
            <div class="w-16 h-16 bg-gradient-to-r from-2596be to-145369 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-2xl">
                {{ getSkillIcon(skill.name) }}
              </span>
            </div>
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-1">{{ skill.name }}</h3>
              <p class="text-gray-500 text-sm">{{ skill.level }}</p>
            </div>
          </div>
          
          <!-- Progress bar -->
          <div class="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              class="skill-progress rounded-full h-3 transition-all duration-1000 ease-out"
              :style="{ width: getSkillProgress(skill.level) + '%' }"
            ></div>
          </div>
          
          <!-- Skill level indicator -->
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Kemahiran</span>
            <span class="text-sm font-semibold text-2596be">{{ getSkillProgress(skill.level) }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Helper functions for skill icons and progress
function getSkillIcon(skillName) {
  const icons = {
    'HTML': '🌐',
    'CSS': '🎨',
    'JavaScript': '⚡',
    'Vue.js': '💚',
    'React': '⚛️',
    'Node.js': '🟢',
    'Python': '🐍',
    'Java': '☕',
    'PHP': '🐘',
    'MySQL': '🗄️',
    'MongoDB': '🍃',
    'Git': '📝',
    'Docker': '🐳',
    'AWS': '☁️',
    'Figma': '🎨',
    'Adobe XD': '🎯'
  }
  return icons[skillName] || '💻'
}

function getSkillProgress(level) {
  const levels = {
    'Pemula': 25,
    'Menengah': 50,
    'Mahir': 75,
    'Expert': 90,
    'Advanced': 95
  }
  return levels[level] || 50
}
</script>
