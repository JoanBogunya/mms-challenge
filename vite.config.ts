import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
   test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],

      },
    }),
  ]
})
