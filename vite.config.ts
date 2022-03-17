import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  //跨域
  server: {
    proxy: {
      // '/api': 'http://localhost:3003'
      '/api': {
        // target: 'http://localhost:3003/api/',
        target: 'http://101.34.251.59:3003/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  }

})

