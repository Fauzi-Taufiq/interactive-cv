<script setup>
defineProps({ title: String })
</script>
<template>
  <div class="mb-16 text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ title }}</h2>
    <div class="w-32 h-1 bg-gradient-to-r from-2596be to-145369 mx-auto rounded-full animate-pulse-glow"></div>
    <div class="w-16 h-1 bg-gradient-to-r from-145369 to-041014 mx-auto mt-2 rounded-full animate-pulse-glow" style="animation-delay: 0.5s;"></div>
  </div>
</template>
