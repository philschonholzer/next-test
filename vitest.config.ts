import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      infra: path.resolve(__dirname, './infra'),
      domain: path.resolve(__dirname, './domain'),
      components: path.resolve(__dirname, './components'),
    },
  },
})
