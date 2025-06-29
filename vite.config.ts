import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpeg,jpg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'bokadirekt-cache',
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ],
        // CRITICAL FIX: Only use offline.html for actual network failures, not for routing
        navigateFallback: '/index.html',
        // Exclude API routes and file extensions from fallback
        navigateFallbackDenylist: [
          /^\/_/,
          /\/[^/?]+\.[^/]+$/,
          /^\/api\//,
          /^\/offline\.html$/
        ],
        skipWaiting: true,
        clientsClaim: true
      },
      includeAssets: [
        'favicon.ico', 
        'offline.html',
        'favicon-36x36.png',
        'favicon-48x48.png',
        'favicon-72x72.png',
        'favicon-96x96.png',
        'favicon-144x144.png',
        'pwa-192x192.png',
        'pwa-512x512.png',
        'barberman-logo.png'
      ],
      manifest: {
        name: 'The Barberman',
        short_name: 'The Barberman',
        description: 'The Barberman - Professional barbering services in Jönköping. Book your appointment online.',
        theme_color: '#1F2937',
        background_color: '#1F2937',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['business', 'lifestyle', 'health'],
        lang: 'sv',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '16x16 32x32 48x48',
            type: 'image/x-icon',
            purpose: 'any'
          },
          {
            src: '/favicon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/favicon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Boka tid',
            short_name: 'Boka',
            description: 'Boka din tid hos The Barberman',
            url: '/',
            icons: [
              {
                src: '/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          },
          {
            name: 'Om oss',
            short_name: 'Om oss',
            description: 'Läs mer om The Barberman',
            url: '/om-oss',
            icons: [
              {
                src: '/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          }
        ]
      },
      devOptions: {
        enabled: false
      },
      injectRegister: 'script',
      strategies: 'generateSW'
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion']
        }
      }
    }
  }
});