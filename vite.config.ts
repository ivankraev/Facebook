import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@/pages',
        replacement: path.resolve(__dirname, 'src/pages'),
      },
      {
        find: '@/routes',
        replacement: path.resolve(__dirname, 'src/routes'),
      },
      {
        find: '@/styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: '@/mocks',
        replacement: path.resolve(__dirname, 'src/__mocks__'),
      },
    ],
  },
})
