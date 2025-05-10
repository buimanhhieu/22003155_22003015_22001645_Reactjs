// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: '/22003155_22003015_22001645_Reactjs/',  // đảm bảo đã set base
  build: {
    outDir: 'docs',        // build xong vào docs/
    emptyOutDir: true,     // xoá sạch trước khi build
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { src: path.resolve(__dirname, './src') },
  },
})
