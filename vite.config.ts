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
        'Barberman Favicon/favicon.ico',
        'Barberman Favicon/favicon-16x16.png',
        'Barberman Favicon/favicon-32x32.png',
        'Barberman Favicon/favicon-96x96.png',
        'Barberman Favicon/apple-icon.png',
        'Barberman Favicon/apple-icon-57x57.png',
        'Barberman Favicon/apple-icon-60x60.png',
        'Barberman Favicon/apple-icon-72x72.png',
        'Barberman Favicon/apple-icon-76x76.png',
        'Barberman Favicon/apple-icon-114x114.png',
        'Barberman Favicon/apple-icon-120x120.png',
        'Barberman Favicon/apple-icon-144x144.png',
        'Barberman Favicon/apple-icon-152x152.png',
        'Barberman Favicon/apple-icon-180x180.png',
        'Barberman Favicon/apple-icon-precomposed.png',
        'Barberman Favicon/android-icon-36x36.png',
        'Barberman Favicon/android-icon-48x48.png',
        'Barberman Favicon/android-icon-72x72.png',
        'Barberman Favicon/android-icon-96x96.png',
        'Barberman Favicon/android-icon-144x144.png',
        'Barberman Favicon/android-icon-192x192.png',
        'Barberman Favicon/ms-icon-70x70.png',
        'Barberman Favicon/ms-icon-144x144.png',
        'Barberman Favicon/ms-icon-150x150.png',
        'Barberman Favicon/ms-icon-310x310.png',
        'icon-1024.png',
        'barberman-logo.png',
        'offline.html',
        'Basel.jpg',
        '3463cbef-8ccf-4b88-a75e-b559a779fd36.jpg'
      ],
      manifest: {
        name: 'The Barberman',
        short_name: 'The Barberman',
        description: 'The Barberman - Professional barbering services in Jönköping. Book your appointment online with Sweden\'s premier barbering experience.',
        theme_color: '#1F2937',
        background_color: '#1F2937',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/',
        categories: ['business', 'lifestyle', 'health'],
        lang: 'sv-SE',
        dir: 'ltr',
        prefer_related_applications: false,
        icons: [
          {
            src: '/Barberman Favicon/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Barberman Favicon/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Barberman Favicon/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Barberman Favicon/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Barberman Favicon/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Barberman Favicon/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/Barberman Favicon/apple-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Barberman Favicon/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Barberman Favicon/ms-icon-310x310.png',
            sizes: '310x310',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: '/icon-1024.png',
            sizes: '1024x1024',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/Barberman Favicon/apple-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Boka tid direkt',
            short_name: 'Boka',
            description: 'Boka din tid hos The Barberman direkt',
            url: '/?utm_source=pwa_shortcut&utm_medium=homescreen&utm_campaign=quick_booking',
            icons: [
              {
                src: '/Barberman Favicon/android-icon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          },
          {
            name: 'Om The Barberman',
            short_name: 'Om oss',
            description: 'Läs mer om The Barberman och våra tjänster',
            url: '/om-oss?utm_source=pwa_shortcut&utm_medium=homescreen&utm_campaign=about_us',
            icons: [
              {
                src: '/Barberman Favicon/android-icon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          },
          {
            name: 'Kontakta oss',
            short_name: 'Kontakt',
            description: 'Ring eller hitta till The Barberman',
            url: '/?tab=info&utm_source=pwa_shortcut&utm_medium=homescreen&utm_campaign=contact',
            icons: [
              {
                src: '/Barberman Favicon/android-icon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
              }
            ]
          }
        ],
        related_applications: [],
        edge_side_panel: {
          preferred_width: 400
        },
        launch_handler: {
          client_mode: 'navigate-existing'
        },
        handle_links: 'preferred',
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
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion']
        },
        assetFileNames: (assetInfo) => {
          const info = (assetInfo.name || '').split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  }
});