<template>
  <header class="navbar-modern shadow-lg fixed top-0 left-0 w-full z-50 animate-fade-in-up">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo with animation -->
      <div class="text-2xl font-bold text-white drop-shadow-lg animate-slide-in-left relative group">
        <span class="relative z-10">Fauzi</span>
        <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-full"></div>
      </div>
      
      <!-- Navigation Menu -->
      <ul class="flex space-x-8">
        <li class="relative group">
          <a
            href="#profil"
            class="nav-link"
          >
            <span class="relative z-10">Profil</span>
            <span class="nav-link-bg"></span>
            <span class="nav-link-underline"></span>
          </a>
        </li>
        <li class="relative group">
          <a
            href="#pendidikan"
            class="nav-link"
          >
            <span class="relative z-10">Pendidikan</span>
            <span class="nav-link-bg"></span>
            <span class="nav-link-underline"></span>
          </a>
        </li>
        <li class="relative group">
          <a
            href="#skill"
            class="nav-link"
          >
            <span class="relative z-10">Skill</span>
            <span class="nav-link-bg"></span>
            <span class="nav-link-underline"></span>
          </a>
        </li>
        <li class="relative group">
          <a
            href="#proyek"
            class="nav-link"
          >
            <span class="relative z-10">Proyek</span>
            <span class="nav-link-bg"></span>
            <span class="nav-link-underline"></span>
          </a>
        </li>
        <li class="relative group">
          <a
            href="#kontak"
            class="nav-link"
          >
            <span class="relative z-10">Kontak</span>
            <span class="nav-link-bg"></span>
            <span class="nav-link-underline"></span>
          </a>
        </li>
      </ul>
      
      <!-- Mobile Menu Button (hidden on desktop) -->
      <div class="md:hidden">
        <button class="text-gray-700 hover:text-primary transition-colors duration-300">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
    
    <!-- Animated background elements -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-32 h-32 bg-dark/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
  </header>
</template>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.nav-link {
  @apply text-gray-700 font-medium relative px-3 py-2 rounded-lg transition-all duration-300 overflow-hidden;
  z-index: 1;
  display: inline-block;
}
.nav-link-bg {
  @apply absolute inset-0 rounded-lg pointer-events-none transition-all duration-300;
  background: rgba(255,255,255,0.18);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  opacity: 0;
  z-index: 0;
}
.group:hover .nav-link-bg {
  opacity: 1;
  box-shadow: 0 4px 24px 0 rgba(37,150,190,0.10);
}
.nav-link-underline {
  @apply absolute left-0 bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 rounded;
  z-index: 2;
}
.group:hover .nav-link-underline {
  width: 100%;
}
.group:hover .nav-link {
  color: #fff !important;
  transform: scale(1.08) translateY(-2px);
  box-shadow: 0 4px 16px 0 rgba(37,150,190,0.10);
  text-shadow: 0 2px 8px rgba(4,16,20,0.18);
}
</style>
