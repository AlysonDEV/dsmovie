import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
// import ssr from 'vite-plugin-ssr/plugin'


// https://vitejs.dev/config/
// const base = process.env.BASE_URL
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      }
    })
  ]
})
