<script setup>
import SectionTitle from './SectionTitle.vue'
</script>
<template>
  <footer id="kontak" class="py-20 bg-041014 text-white relative">
    <!-- Decorative elements for Contact section -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Background shapes - more subtle -->
      <div class="absolute top-1/6 left-1/12 w-24 h-24 bg-gradient-to-r from-2596be/5 to-145369/5 rounded-full blur-lg"></div>
      <div class="absolute bottom-1/6 right-1/12 w-20 h-20 bg-gradient-to-r from-145369/5 to-041014/5 rounded-full blur-lg"></div>
      
      <!-- Decorative lines - more subtle -->
      <div class="absolute top-1/4 left-0 w-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute bottom-1/4 right-0 w-20 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent"></div>
      
      <!-- Corner decorations - more subtle -->
      <div class="absolute top-8 left-8 w-4 h-4 border-l border-t border-white/10"></div>
      <div class="absolute top-8 right-8 w-4 h-4 border-r border-t border-white/10"></div>
      <div class="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-white/10"></div>
      <div class="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-white/10"></div>
      
      <!-- Floating dots - more subtle -->
      <div class="absolute top-1/3 left-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/3 right-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
    </div>
    
    <div class="container mx-auto px-6 text-center relative z-10">
      <SectionTitle title="Hubungi Saya" />
      <p class="text-xl text-gray-300 mb-8">Jangan ragu untuk terhubung atau bertanya.</p>
      <a
        href="mailto:emailanda@example.com"
        class="btn-modern inline-block mb-12"
      >
        Kirim Email
      </a>
      <div class="flex justify-center space-x-6 mb-8">
        <a
          href="https://github.com/Fauzi-Taufiq/"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>
      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }} Muhammad Taufiq Al Fauzi. Dibuat dengan Vue
      </p>
    </div>
  </footer>
</template>
