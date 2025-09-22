/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Mid-century academic color palette
        'parchment': '#F5F5DC', // Beige/Off-white background
        'cream': '#FFF8DC', // Creamy white
        'tan': '#D2B48C', // Light tan
        'olive': '#6B8E23', // Olive green primary
        'forest': '#2F4F2F', // Deep forest green
        'brown': '#8B4513', // Deep brown
        'muted-gold': '#B8860B', // Muted gold
        'ink': '#2C2C2C', // Dark ink for text
        'sepia': '#704214', // Sepia brown
        'paper': '#FDF5E6', // Paper white
        'vintage-blue': '#4682B4', // Steel blue for accents
        'technical-gray': '#708090', // Technical documentation gray
      },
      fontFamily: {
        'serif-heading': ['Merriweather', 'Georgia', 'serif'],
        'sans-body': ['Lato', 'Inter', 'sans-serif'],
        'mono': ['Courier New', 'monospace'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0idXJsKCNncmFpbikiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmFpbiIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmOWY5ZjkiLz4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2Y1ZjVmNSIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPC9zdmc+')",
        'blueprint': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRkZGRkZGIi8+CjxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iMCIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bGluZSB4MT0iMCIgeTE9IjIwIiB4Mj0iNDAiIHkyPSIyMCIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bGluZSB4MT0iMCIgeTE9IjQwIiB4Mj0iNDAiIHkyPSI0MCIgc3Ryb2tlPSIjRTVFN0VCIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0iI0U1RTdFQiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPGxpbmUgeDE9IjIwIiB5MT0iMCIgeDI9IjIwIiB5Mj0iNDAiIHN0cm9rZT0iI0U1RTdFQiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPGxpbmUgeDE9IjQwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iNDAiIHN0cm9rZT0iI0U1RTdFQiIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'vintage': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'ink-stamp': '0 0 0 1px rgba(107, 142, 35, 0.3), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'technical': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'typewriter': 'typewriter 2s steps(40) 1s 1 normal both',
        'ink-dry': 'inkDry 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        inkDry: {
          '0%': { opacity: '0.7', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
};