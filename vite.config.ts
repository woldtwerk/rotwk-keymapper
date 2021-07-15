import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { VitePWA } from 'vite-plugin-pwa'
import ViteComponents from 'vite-plugin-components'
import mkcert from 'vite-plugin-mkcert'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
    },
  },
  plugins: [
    vue(),
    mkcert(),
    WindiCSS(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'rotwk',
        short_name: 'rotwk',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    ViteComponents({ globalComponentsDeclaration: true }),
  ],
})
