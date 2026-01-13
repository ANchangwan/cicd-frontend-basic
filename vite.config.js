import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    assetsInlineLimit: 0, // asset 해시 관련 문제 회피
    rollupOptions: {
      output: {
        assetFileNames: '[name][extname]',
      },
    },
  },
})
