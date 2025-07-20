// tailwind.config.js 
/** @type {import('tailwindcss').Config} */ 
export default { 
  content: [ 
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ], 
  theme: { 
    extend: { 
      colors: {
        primary: '#2596be',
        secondary: '#145369',
        dark: '#041014',
      },
      keyframes: {
        'slide-in-left': { 
          '0%': { transform: 'translateX(-100%)', opacity: '0' }, 
          '100%': { transform: 'translateX(0)', opacity: '1' }, 
        }, 
        'slide-in-right': { 
          '0%': { transform: 'translateX(100%)', opacity: '0' }, 
          '100%': { transform: 'translateX(0)', opacity: '1' }, 
        }, 
        'fade-in': { 
          '0%': { opacity: '0' }, 
          '100%': { opacity: '1' }, 
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 150, 190, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 150, 190, 0.8)' },
        },
        'rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }, 
      animation: { 
        'slide-in-left': 'slide-in-left 0.7s ease-out forwards', 
        'slide-in-right': 'slide-in-right 0.7s ease-out forwards', 
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    }, 
  }, 
  plugins: [], 
}