<script setup>
import { RouterView } from 'vue-router'
</script>
<template>
  <div class="min-h-screen bg-gradient-primary pattern-dots relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating circles -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-40 right-1/3 w-20 h-20 bg-white/10 rounded-full animate-float" style="animation-delay: 0.5s;"></div>
      
      <!-- Geometric shapes -->
      <div class="absolute top-1/4 left-1/6 w-16 h-16 bg-gradient-to-r from-2596be/20 to-145369/20 rotate-45 animate-float" style="animation-delay: 1.5s;"></div>
      <div class="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-145369/20 to-041014/20 rounded-full animate-float" style="animation-delay: 2.5s;"></div>
      <div class="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-2596be/20 to-145369/20 rotate-12 animate-float" style="animation-delay: 0.8s;"></div>
      
      <!-- Lines and curves -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      <div class="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      
      <!-- Diagonal lines -->
      <div class="absolute top-0 left-0 w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-45 origin-left"></div>
      <div class="absolute top-0 right-0 w-64 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent transform -rotate-45 origin-right"></div>
      <div class="absolute bottom-0 left-0 w-64 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-45 origin-left"></div>
      <div class="absolute bottom-0 right-0 w-64 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent transform rotate-45 origin-right"></div>
      
      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 pattern-grid opacity-5"></div>
      
      <!-- Corner decorations -->
      <div class="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-white/20"></div>
      <div class="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-white/20"></div>
      <div class="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-white/20"></div>
      <div class="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-white/20"></div>
      
      <!-- Floating dots -->
      <div class="absolute top-1/4 left-1/12 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      <div class="absolute top-1/2 right-1/12 w-2 h-2 bg-white/30 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
      <div class="absolute bottom-1/3 left-1/6 w-2 h-2 bg-white/30 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-1/4 right-1/6 w-2 h-2 bg-white/30 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10">
      <RouterView />
    </div>
  </div>
</template>
