<template>
  <section id="profil" class="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center min-h-screen relative">
    <!-- Decorative elements for Hero section -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Background shapes -->
      <div class="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-2596be/10 to-145369/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-1/4 right-1/6 w-24 h-24 bg-gradient-to-r from-145369/10 to-041014/10 rounded-full blur-xl"></div>
      
      <!-- Decorative lines -->
      <div class="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div class="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
      
      <!-- Corner decorations -->
      <div class="absolute top-8 left-8 w-6 h-6 border-l-2 border-t-2 border-white/20"></div>
      <div class="absolute top-8 right-8 w-6 h-6 border-r-2 border-t-2 border-white/20"></div>
      <div class="absolute bottom-8 left-8 w-6 h-6 border-l-2 border-b-2 border-white/20"></div>
      <div class="absolute bottom-8 right-8 w-6 h-6 border-r-2 border-b-2 border-white/20"></div>
      
      <!-- Floating elements -->
      <div class="absolute top-1/4 right-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/3 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
    </div>
    
    <div class="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left relative z-10">
      <div class="glass rounded-3xl p-8 backdrop-blur-lg">
        <!-- Decorative elements inside card -->
        <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-2596be/20 to-145369/20 rounded-full"></div>
        <div class="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-145369/20 to-041014/20 rounded-full"></div>
        
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          Halo, Saya 
          <span class="text-2596be block mt-2">Muhammad Taufiq Al Fauzi</span>
        </h1>
        <p class="text-xl text-gray-200 mb-8 leading-relaxed">
          Mahasiswa Informatika Universitas Amikom Yogyakarta yang antusias dalam pengembangan web,
          desain antarmuka, dan pengelolaan database.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="#kontak"
            class="btn-modern inline-flex items-center justify-center"
          >
            <span class="mr-2">💬</span>
            Hubungi Saya
          </a>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 flex justify-center animate-slide-in-right relative z-10">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-r from-2596be to-145369 rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
        <img
          src="/img/pp.JPEG"
          alt="Foto Profil"
          class="w-80 h-80 rounded-full object-cover shadow-2xl relative z-10 animate-float"
        />
        <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-2596be to-145369 rounded-full animate-pulse-glow"></div>
        <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-145369 to-041014 rounded-full animate-pulse-glow" style="animation-delay: 1s;"></div>
        
        <!-- Additional decorative elements around image -->
        <div class="absolute -top-8 -left-8 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div class="absolute -bottom-8 -right-8 w-3 h-3 bg-white/30 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
        <div class="absolute top-1/2 -left-12 w-2 h-2 bg-white/40 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 -right-12 w-2 h-2 bg-white/40 rounded-full animate-pulse" style="animation-delay: 1.5s;"></div>
      </div>
    </div>
  </section>
</template>
