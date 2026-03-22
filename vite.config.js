import { defineConfig } from 'vite'
import { resolve } from 'path'
import cloudflare from '@cloudflare/vite-plugin'

export default defineConfig({
  // plugins配列を追加し、cloudflareプラグインを有効化します
  plugins: [cloudflare()],

  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        houmon: resolve(__dirname, 'houmon/index.html'),
        jihi: resolve(__dirname, 'jihi/index.html'),
        isou: resolve(__dirname, 'isou/index.html'),
        seikatsu: resolve(__dirname, 'seikatsu/index.html'),
        company: resolve(__dirname, 'company/index.html'),
        policy: resolve(__dirname, 'policy/index.html'),
      },
    },
  },
})