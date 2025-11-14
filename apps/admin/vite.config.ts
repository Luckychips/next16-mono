import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      tsconfigPaths({
          projects: ['./tsconfig.json'],
      }),
      React(),
      UnoCSS(),
  ],
})
