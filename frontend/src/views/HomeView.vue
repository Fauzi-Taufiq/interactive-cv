<script setup>
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'
import Education from '@/components/Education.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
</script>
<template>
  <div class="scroll-smooth">
    <Navbar />
    <main>
      <Hero />
      <div v-animate-on-scroll class="animate-fade-in-up">
        <Education />
      </div>
      <div v-animate-on-scroll class="animate-fade-in-up">
        <Skills />
      </div>
      <div v-animate-on-scroll class="animate-fade-in-up">
        <Projects />
      </div>
      <div v-animate-on-scroll class="animate-fade-in-up">
        <Contact />
      </div>
    </main>
  </div>
</template>

<style scoped>
.scroll-smooth {
  scroll-behavior: smooth;
}
</style>
