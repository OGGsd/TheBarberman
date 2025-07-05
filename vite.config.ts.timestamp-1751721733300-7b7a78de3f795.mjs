// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///home/project/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpeg,jpg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          },
          {
            urlPattern: /^https:\/\/www\.bokadirekt\.se\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "bokadirekt-cache",
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24
              },
              networkTimeoutSeconds: 10
            }
          },
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30
              }
            }
          }
        ],
        navigateFallback: "/index.html",
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
        "favicon.ico",
        "offline.html",
        "barberman-logo.png",
        "Basel.jpg",
        "3463cbef-8ccf-4b88-a75e-b559a779fd36.jpg",
        // Comprehensive favicon inclusion
        "Favicon/android-icon-36x36.png",
        "Favicon/android-icon-48x48.png",
        "Favicon/android-icon-72x72.png",
        "Favicon/android-icon-96x96.png",
        "Favicon/android-icon-144x144.png",
        "Favicon/android-icon-192x192.png",
        "Favicon/apple-icon-57x57.png",
        "Favicon/apple-icon-60x60.png",
        "Favicon/apple-icon-72x72.png",
        "Favicon/apple-icon-76x76.png",
        "Favicon/apple-icon-114x114.png",
        "Favicon/apple-icon-120x120.png",
        "Favicon/apple-icon-144x144.png",
        "Favicon/apple-icon-152x152.png",
        "Favicon/apple-icon-180x180.png",
        "Favicon/apple-icon-precomposed.png",
        "Favicon/apple-icon.png",
        "Favicon/favicon-16x16.png",
        "Favicon/favicon-32x32.png",
        "Favicon/favicon-96x96.png",
        "Favicon/ms-icon-70x70.png",
        "Favicon/ms-icon-144x144.png",
        "Favicon/ms-icon-150x150.png",
        "Favicon/ms-icon-310x310.png"
      ],
      manifest: {
        name: "The Barberman",
        short_name: "The Barberman",
        description: "The Barberman - Professional barbering services in J\xF6nk\xF6ping. Book your appointment online with Sweden's premier barbering experience.",
        theme_color: "#1F2937",
        background_color: "#1F2937",
        display: "standalone",
        orientation: "portrait-primary",
        scope: "/",
        start_url: "/",
        categories: ["business", "lifestyle", "health"],
        lang: "sv-SE",
        dir: "ltr",
        prefer_related_applications: false,
        display_override: ["window-controls-overlay", "standalone"],
        protocol_handlers: [
          {
            protocol: "web+barberman",
            url: "/?booking=%s"
          }
        ],
        file_handlers: [
          {
            action: "/",
            accept: {
              "text/calendar": [".ics"]
            }
          }
        ],
        share_target: {
          action: "/",
          method: "GET",
          params: {
            title: "title",
            text: "text",
            url: "url"
          }
        },
        icons: [
          {
            src: "/Favicon/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/Favicon/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/Favicon/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/Favicon/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/Favicon/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/Favicon/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/Favicon/android-icon-192x192.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ],
        shortcuts: [
          {
            name: "Boka tid direkt",
            short_name: "Boka",
            description: "Boka din tid hos The Barberman direkt",
            url: "/?utm_source=pwa_shortcut&utm_medium=homescreen&utm_campaign=quick_booking",
            icons: [
              {
                src: "/Favicon/android-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ]
          },
          {
            name: "Om The Barberman",
            short_name: "Om oss",
            description: "L\xE4s mer om The Barberman och v\xE5ra tj\xE4nster",
            url: "/om-oss?utm_source=pwa_shortcut&utm_medium=homescreen&utm_campaign=about_us",
            icons: [
              {
                src: "/Favicon/android-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ]
          },
          {
            name: "Kontakta oss",
            short_name: "Kontakt",
            description: "Ring eller hitta till The Barberman",
            url: "/?tab=info&utm_source=pwa_shortcut&utm_medium=homescreen&utm_campaign=contact",
            icons: [
              {
                src: "/Favicon/android-icon-96x96.png",
                sizes: "96x96",
                type: "image/png"
              }
            ]
          }
        ],
        related_applications: [],
        edge_side_panel: {
          preferred_width: 400
        },
        launch_handler: {
          client_mode: "navigate-existing"
        },
        handle_links: "preferred"
      },
      devOptions: {
        enabled: false
      },
      injectRegister: "script",
      strategies: "generateSW"
    })
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  build: {
    target: "esnext",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          icons: ["lucide-react"],
          motion: ["framer-motion"]
        },
        assetFileNames: (assetInfo) => {
          const info = (assetInfo.name || "").split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnLGpwZWcsanBnfSddLFxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ3N0YXRpY1xcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dzdGF0aWMtZm9udHMtY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvd3d3XFwuYm9rYWRpcmVrdFxcLnNlXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdib2thZGlyZWt0LWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDIwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXFwuKD86cG5nfGpwZ3xqcGVnfHN2Z3xnaWZ8d2VicCkkLyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnaW1hZ2VzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFtcbiAgICAgICAgICAvXlxcL18vLFxuICAgICAgICAgIC9cXC9bXi8/XStcXC5bXi9dKyQvLFxuICAgICAgICAgIC9eXFwvYXBpXFwvLyxcbiAgICAgICAgICAvXlxcL29mZmxpbmVcXC5odG1sJC9cbiAgICAgICAgXSxcbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcbiAgICAgICAgJ2Zhdmljb24uaWNvJyxcbiAgICAgICAgJ29mZmxpbmUuaHRtbCcsXG4gICAgICAgICdiYXJiZXJtYW4tbG9nby5wbmcnLFxuICAgICAgICAnQmFzZWwuanBnJyxcbiAgICAgICAgJzM0NjNjYmVmLThjY2YtNGI4OC1hNzVlLWI1NTlhNzc5ZmQzNi5qcGcnLFxuICAgICAgICAvLyBDb21wcmVoZW5zaXZlIGZhdmljb24gaW5jbHVzaW9uXG4gICAgICAgICdGYXZpY29uL2FuZHJvaWQtaWNvbi0zNngzNi5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hbmRyb2lkLWljb24tNDh4NDgucG5nJyxcbiAgICAgICAgJ0Zhdmljb24vYW5kcm9pZC1pY29uLTcyeDcyLnBuZycsXG4gICAgICAgICdGYXZpY29uL2FuZHJvaWQtaWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hbmRyb2lkLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hbmRyb2lkLWljb24tMTkyeDE5Mi5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hcHBsZS1pY29uLTU3eDU3LnBuZycsXG4gICAgICAgICdGYXZpY29uL2FwcGxlLWljb24tNjB4NjAucG5nJyxcbiAgICAgICAgJ0Zhdmljb24vYXBwbGUtaWNvbi03Mng3Mi5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hcHBsZS1pY29uLTc2eDc2LnBuZycsXG4gICAgICAgICdGYXZpY29uL2FwcGxlLWljb24tMTE0eDExNC5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hcHBsZS1pY29uLTEyMHgxMjAucG5nJyxcbiAgICAgICAgJ0Zhdmljb24vYXBwbGUtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICdGYXZpY29uL2FwcGxlLWljb24tMTUyeDE1Mi5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hcHBsZS1pY29uLTE4MHgxODAucG5nJyxcbiAgICAgICAgJ0Zhdmljb24vYXBwbGUtaWNvbi1wcmVjb21wb3NlZC5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9hcHBsZS1pY29uLnBuZycsXG4gICAgICAgICdGYXZpY29uL2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgICAgJ0Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZycsXG4gICAgICAgICdGYXZpY29uL21zLWljb24tNzB4NzAucG5nJyxcbiAgICAgICAgJ0Zhdmljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZycsXG4gICAgICAgICdGYXZpY29uL21zLWljb24tMTUweDE1MC5wbmcnLFxuICAgICAgICAnRmF2aWNvbi9tcy1pY29uLTMxMHgzMTAucG5nJ1xuICAgICAgXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdUaGUgQmFyYmVybWFuJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1RoZSBCYXJiZXJtYW4nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBCYXJiZXJtYW4gLSBQcm9mZXNzaW9uYWwgYmFyYmVyaW5nIHNlcnZpY2VzIGluIEpcdTAwRjZua1x1MDBGNnBpbmcuIEJvb2sgeW91ciBhcHBvaW50bWVudCBvbmxpbmUgd2l0aCBTd2VkZW5cXCdzIHByZW1pZXIgYmFyYmVyaW5nIGV4cGVyaWVuY2UuJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMUYyOTM3JyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyMxRjI5MzcnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgICAgIHNjb3BlOiAnLycsXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ2J1c2luZXNzJywgJ2xpZmVzdHlsZScsICdoZWFsdGgnXSxcbiAgICAgICAgbGFuZzogJ3N2LVNFJyxcbiAgICAgICAgZGlyOiAnbHRyJyxcbiAgICAgICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBmYWxzZSxcbiAgICAgICAgZGlzcGxheV9vdmVycmlkZTogWyd3aW5kb3ctY29udHJvbHMtb3ZlcmxheScsICdzdGFuZGFsb25lJ10sXG4gICAgICAgIHByb3RvY29sX2hhbmRsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdG9jb2w6ICd3ZWIrYmFyYmVybWFuJyxcbiAgICAgICAgICAgIHVybDogJy8/Ym9va2luZz0lcydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbGVfaGFuZGxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY3Rpb246ICcvJyxcbiAgICAgICAgICAgIGFjY2VwdDoge1xuICAgICAgICAgICAgICAndGV4dC9jYWxlbmRhcic6IFsnLmljcyddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaGFyZV90YXJnZXQ6IHtcbiAgICAgICAgICBhY3Rpb246ICcvJyxcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdGl0bGU6ICd0aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICAgICAgICB1cmw6ICd1cmwnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9GYXZpY29uL2FuZHJvaWQtaWNvbi0zNngzNi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICczNngzNicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvRmF2aWNvbi9hbmRyb2lkLWljb24tNDh4NDgucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNDh4NDgnLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL0Zhdmljb24vYW5kcm9pZC1pY29uLTcyeDcyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzcyeDcyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9GYXZpY29uL2FuZHJvaWQtaWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvRmF2aWNvbi9hbmRyb2lkLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxNDR4MTQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9GYXZpY29uL2FuZHJvaWQtaWNvbi0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL0Zhdmljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaG9ydGN1dHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQm9rYSB0aWQgZGlyZWt0JyxcbiAgICAgICAgICAgIHNob3J0X25hbWU6ICdCb2thJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQm9rYSBkaW4gdGlkIGhvcyBUaGUgQmFyYmVybWFuIGRpcmVrdCcsXG4gICAgICAgICAgICB1cmw6ICcvP3V0bV9zb3VyY2U9cHdhX3Nob3J0Y3V0JnV0bV9tZWRpdW09aG9tZXNjcmVlbiZ1dG1fY2FtcGFpZ249cXVpY2tfYm9va2luZycsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnL0Zhdmljb24vYW5kcm9pZC1pY29uLTk2eDk2LnBuZycsXG4gICAgICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ09tIFRoZSBCYXJiZXJtYW4nLFxuICAgICAgICAgICAgc2hvcnRfbmFtZTogJ09tIG9zcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xcdTAwRTRzIG1lciBvbSBUaGUgQmFyYmVybWFuIG9jaCB2XHUwMEU1cmEgdGpcdTAwRTRuc3RlcicsXG4gICAgICAgICAgICB1cmw6ICcvb20tb3NzP3V0bV9zb3VyY2U9cHdhX3Nob3J0Y3V0JnV0bV9tZWRpdW09aG9tZXNjcmVlbiZ1dG1fY2FtcGFpZ249YWJvdXRfdXMnLFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJy9GYXZpY29uL2FuZHJvaWQtaWNvbi05Nng5Ni5wbmcnLFxuICAgICAgICAgICAgICAgIHNpemVzOiAnOTZ4OTYnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdLb250YWt0YSBvc3MnLFxuICAgICAgICAgICAgc2hvcnRfbmFtZTogJ0tvbnRha3QnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSaW5nIGVsbGVyIGhpdHRhIHRpbGwgVGhlIEJhcmJlcm1hbicsXG4gICAgICAgICAgICB1cmw6ICcvP3RhYj1pbmZvJnV0bV9zb3VyY2U9cHdhX3Nob3J0Y3V0JnV0bV9tZWRpdW09aG9tZXNjcmVlbiZ1dG1fY2FtcGFpZ249Y29udGFjdCcsXG4gICAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3JjOiAnL0Zhdmljb24vYW5kcm9pZC1pY29uLTk2eDk2LnBuZycsXG4gICAgICAgICAgICAgICAgc2l6ZXM6ICc5Nng5NicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsYXRlZF9hcHBsaWNhdGlvbnM6IFtdLFxuICAgICAgICBlZGdlX3NpZGVfcGFuZWw6IHtcbiAgICAgICAgICBwcmVmZXJyZWRfd2lkdGg6IDQwMFxuICAgICAgICB9LFxuICAgICAgICBsYXVuY2hfaGFuZGxlcjoge1xuICAgICAgICAgIGNsaWVudF9tb2RlOiAnbmF2aWdhdGUtZXhpc3RpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGhhbmRsZV9saW5rczogJ3ByZWZlcnJlZCcsXG4gICAgICB9LFxuICAgICAgZGV2T3B0aW9uczoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGluamVjdFJlZ2lzdGVyOiAnc2NyaXB0JyxcbiAgICAgIHN0cmF0ZWdpZXM6ICdnZW5lcmF0ZVNXJ1xuICAgIH0pXG4gIF0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J11cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICB0ZXJzZXJPcHRpb25zOiB7XG4gICAgICBjb21wcmVzczoge1xuICAgICAgICBkcm9wX2NvbnNvbGU6IHRydWUsXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgcm91dGVyOiBbJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICBpY29uczogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgICBtb3Rpb246IFsnZnJhbWVyLW1vdGlvbiddXG4gICAgICAgIH0sXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5mbyA9IChhc3NldEluZm8ubmFtZSB8fCAnJykuc3BsaXQoJy4nKTtcbiAgICAgICAgICBjb25zdCBleHQgPSBpbmZvW2luZm8ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKC9wbmd8anBlP2d8c3ZnfGdpZnx0aWZmfGJtcHxpY28vaS50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL2ltYWdlcy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKC93b2ZmMj98ZW90fHR0ZnxvdGYvaS50ZXN0KGV4dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBgYXNzZXRzL2ZvbnRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdYDtcbiAgICAgICAgfSxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnXG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFh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
