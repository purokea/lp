import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        houmon: resolve(__dirname, 'houmon/index.html'),
        jihi: resolve(__dirname, 'jihi/index.html'),
        isou: resolve(__dirname, 'isou/index.html'),
        seikatsu: resolve(__dirname, 'seikatsu/index.html'),
      },
    },
  },
})
