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
        navigateFallback: '/index.html',
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
        'Favicon/16x16.png',
        'Favicon/32x32.png',
        'Favicon/57x57.png',
        'Favicon/60x60.png',
        'Favicon/72x72.png',
        'Favicon/76x76.png',
        'Favicon/96x96.png',
        'Favicon/114x114.png',
        'Favicon/120x120.png',
        'Favicon/144x144.png',
        'Favicon/152x152.png',
        'Favicon/180x180.png',
        'Favicon/192x192.png',
        'Favicon/512x512.png',
        'Favicon/1024x1024.png',
        'barberman-logo.png',
        'offline.html',
        'Basel.jpg',
        '3463cbef-8ccf-4b88-a75e-b559a779fd36.jpg'
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
            src: '/Favicon/16x16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/180x180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Favicon/72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/152x152.png',
            sizes: '152x152',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/180x180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Favicon/1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'maskable'
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
                src: '/Favicon/96x96.png',
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
                src: '/Favicon/96x96.png',
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