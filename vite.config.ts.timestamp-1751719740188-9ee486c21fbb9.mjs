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
        "favicon-16x16.png",
        "favicon-32x32.png",
        "favicon-96x96.png",
        "apple-touch-icon.png",
        "apple-touch-icon-57x57.png",
        "apple-touch-icon-60x60.png",
        "apple-touch-icon-72x72.png",
        "apple-touch-icon-76x76.png",
        "apple-touch-icon-114x114.png",
        "apple-touch-icon-120x120.png",
        "apple-touch-icon-144x144.png",
        "apple-touch-icon-152x152.png",
        "apple-touch-icon-precomposed.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "mstile-70x70.png",
        "mstile-144x144.png",
        "mstile-150x150.png",
        "mstile-310x150.png",
        "mstile-310x310.png",
        "icon-1024.png",
        "barberman-logo.png",
        "offline.html",
        "Basel.jpg",
        "3463cbef-8ccf-4b88-a75e-b559a779fd36.jpg"
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
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/favicon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/icon-1024.png",
            sizes: "1024x1024",
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
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
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
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
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
                src: "/android-chrome-192x192.png",
                sizes: "192x192",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIHdvcmtib3g6IHtcbiAgICAgICAgZ2xvYlBhdHRlcm5zOiBbJyoqLyoue2pzLGNzcyxodG1sLGljbyxwbmcsc3ZnLGpwZWcsanBnfSddLFxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvZm9udHNcXC5nb29nbGVhcGlzXFwuY29tXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnZ29vZ2xlLWZvbnRzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNCAqIDM2NVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXmh0dHBzOlxcL1xcL2ZvbnRzXFwuZ3N0YXRpY1xcLmNvbVxcLy4qL2ksXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2dzdGF0aWMtZm9udHMtY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogNjAgKiA2MCAqIDI0ICogMzY1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IC9eaHR0cHM6XFwvXFwvd3d3XFwuYm9rYWRpcmVrdFxcLnNlXFwvLiovaSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdib2thZGlyZWt0LWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDIwLFxuICAgICAgICAgICAgICAgIG1heEFnZVNlY29uZHM6IDYwICogNjAgKiAyNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiAvXFwuKD86cG5nfGpwZ3xqcGVnfHN2Z3xnaWZ8d2VicCkkLyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnaW1hZ2VzLWNhY2hlJyxcbiAgICAgICAgICAgICAgZXhwaXJhdGlvbjoge1xuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrOiAnL2luZGV4Lmh0bWwnLFxuICAgICAgICBuYXZpZ2F0ZUZhbGxiYWNrRGVueWxpc3Q6IFtcbiAgICAgICAgICAvXlxcL18vLFxuICAgICAgICAgIC9cXC9bXi8/XStcXC5bXi9dKyQvLFxuICAgICAgICAgIC9eXFwvYXBpXFwvLyxcbiAgICAgICAgICAvXlxcL29mZmxpbmVcXC5odG1sJC9cbiAgICAgICAgXSxcbiAgICAgICAgc2tpcFdhaXRpbmc6IHRydWUsXG4gICAgICAgIGNsaWVudHNDbGFpbTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFtcbiAgICAgICAgJ2Zhdmljb24uaWNvJyxcbiAgICAgICAgJ2Zhdmljb24tMTZ4MTYucG5nJyxcbiAgICAgICAgJ2Zhdmljb24tMzJ4MzIucG5nJyxcbiAgICAgICAgJ2Zhdmljb24tOTZ4OTYucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24ucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNTd4NTcucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNjB4NjAucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tNzZ4NzYucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi0xMjB4MTIwLnBuZycsXG4gICAgICAgICdhcHBsZS10b3VjaC1pY29uLTE0NHgxNDQucG5nJyxcbiAgICAgICAgJ2FwcGxlLXRvdWNoLWljb24tMTUyeDE1Mi5wbmcnLFxuICAgICAgICAnYXBwbGUtdG91Y2gtaWNvbi1wcmVjb21wb3NlZC5wbmcnLFxuICAgICAgICAnYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAnYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmcnLFxuICAgICAgICAnbXN0aWxlLTcweDcwLnBuZycsXG4gICAgICAgICdtc3RpbGUtMTQ0eDE0NC5wbmcnLFxuICAgICAgICAnbXN0aWxlLTE1MHgxNTAucG5nJyxcbiAgICAgICAgJ21zdGlsZS0zMTB4MTUwLnBuZycsXG4gICAgICAgICdtc3RpbGUtMzEweDMxMC5wbmcnLFxuICAgICAgICAnaWNvbi0xMDI0LnBuZycsXG4gICAgICAgICdiYXJiZXJtYW4tbG9nby5wbmcnLFxuICAgICAgICAnb2ZmbGluZS5odG1sJyxcbiAgICAgICAgJ0Jhc2VsLmpwZycsXG4gICAgICAgICczNDYzY2JlZi04Y2NmLTRiODgtYTc1ZS1iNTU5YTc3OWZkMzYuanBnJ1xuICAgICAgXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICdUaGUgQmFyYmVybWFuJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ1RoZSBCYXJiZXJtYW4nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoZSBCYXJiZXJtYW4gLSBQcm9mZXNzaW9uYWwgYmFyYmVyaW5nIHNlcnZpY2VzIGluIEpcdTAwRjZua1x1MDBGNnBpbmcuIEJvb2sgeW91ciBhcHBvaW50bWVudCBvbmxpbmUgd2l0aCBTd2VkZW5cXCdzIHByZW1pZXIgYmFyYmVyaW5nIGV4cGVyaWVuY2UuJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMUYyOTM3JyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyMxRjI5MzcnLFxuICAgICAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQtcHJpbWFyeScsXG4gICAgICAgIHNjb3BlOiAnLycsXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxuICAgICAgICBjYXRlZ29yaWVzOiBbJ2J1c2luZXNzJywgJ2xpZmVzdHlsZScsICdoZWFsdGgnXSxcbiAgICAgICAgbGFuZzogJ3N2LVNFJyxcbiAgICAgICAgZGlyOiAnbHRyJyxcbiAgICAgICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBmYWxzZSxcbiAgICAgICAgZGlzcGxheV9vdmVycmlkZTogWyd3aW5kb3ctY29udHJvbHMtb3ZlcmxheScsICdzdGFuZGFsb25lJ10sXG4gICAgICAgIHByb3RvY29sX2hhbmRsZXJzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcHJvdG9jb2w6ICd3ZWIrYmFyYmVybWFuJyxcbiAgICAgICAgICAgIHVybDogJy8/Ym9va2luZz0lcydcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbGVfaGFuZGxlcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY3Rpb246ICcvJyxcbiAgICAgICAgICAgIGFjY2VwdDoge1xuICAgICAgICAgICAgICAndGV4dC9jYWxlbmRhcic6IFsnLmljcyddXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzaGFyZV90YXJnZXQ6IHtcbiAgICAgICAgICBhY3Rpb246ICcvJyxcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdGl0bGU6ICd0aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAndGV4dCcsXG4gICAgICAgICAgICB1cmw6ICd1cmwnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTE2eDE2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE2eDE2JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTMyeDMyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzMyeDMyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9mYXZpY29uLTk2eDk2LnBuZycsXG4gICAgICAgICAgICBzaXplczogJzk2eDk2JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL2FuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvYXBwbGUtdG91Y2gtaWNvbi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxODB4MTgwJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9pY29uLTEwMjQucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTAyNHgxMDI0JyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHNob3J0Y3V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdCb2thIHRpZCBkaXJla3QnLFxuICAgICAgICAgICAgc2hvcnRfbmFtZTogJ0Jva2EnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCb2thIGRpbiB0aWQgaG9zIFRoZSBCYXJiZXJtYW4gZGlyZWt0JyxcbiAgICAgICAgICAgIHVybDogJy8/dXRtX3NvdXJjZT1wd2Ffc2hvcnRjdXQmdXRtX21lZGl1bT1ob21lc2NyZWVuJnV0bV9jYW1wYWlnbj1xdWlja19ib29raW5nJyxcbiAgICAgICAgICAgIGljb25zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6ICcvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ09tIFRoZSBCYXJiZXJtYW4nLFxuICAgICAgICAgICAgc2hvcnRfbmFtZTogJ09tIG9zcycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xcdTAwRTRzIG1lciBvbSBUaGUgQmFyYmVybWFuIG9jaCB2XHUwMEU1cmEgdGpcdTAwRTRuc3RlcicsXG4gICAgICAgICAgICB1cmw6ICcvb20tb3NzP3V0bV9zb3VyY2U9cHdhX3Nob3J0Y3V0JnV0bV9tZWRpdW09aG9tZXNjcmVlbiZ1dG1fY2FtcGFpZ249YWJvdXRfdXMnLFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnS29udGFrdGEgb3NzJyxcbiAgICAgICAgICAgIHNob3J0X25hbWU6ICdLb250YWt0JyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmluZyBlbGxlciBoaXR0YSB0aWxsIFRoZSBCYXJiZXJtYW4nLFxuICAgICAgICAgICAgdXJsOiAnLz90YWI9aW5mbyZ1dG1fc291cmNlPXB3YV9zaG9ydGN1dCZ1dG1fbWVkaXVtPWhvbWVzY3JlZW4mdXRtX2NhbXBhaWduPWNvbnRhY3QnLFxuICAgICAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzogJy9hbmRyb2lkLWNocm9tZS0xOTJ4MTkyLnBuZycsXG4gICAgICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxhdGVkX2FwcGxpY2F0aW9uczogW10sXG4gICAgICAgIGVkZ2Vfc2lkZV9wYW5lbDoge1xuICAgICAgICAgIHByZWZlcnJlZF93aWR0aDogNDAwXG4gICAgICAgIH0sXG4gICAgICAgIGxhdW5jaF9oYW5kbGVyOiB7XG4gICAgICAgICAgY2xpZW50X21vZGU6ICduYXZpZ2F0ZS1leGlzdGluZydcbiAgICAgICAgfSxcbiAgICAgICAgaGFuZGxlX2xpbmtzOiAncHJlZmVycmVkJyxcbiAgICAgIH0sXG4gICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgaW5qZWN0UmVnaXN0ZXI6ICdzY3JpcHQnLFxuICAgICAgc3RyYXRlZ2llczogJ2dlbmVyYXRlU1cnXG4gICAgfSlcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogWydsdWNpZGUtcmVhY3QnXVxuICB9LFxuICBidWlsZDoge1xuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICByb3V0ZXI6IFsncmVhY3Qtcm91dGVyLWRvbSddLFxuICAgICAgICAgIGljb25zOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICAgIG1vdGlvbjogWydmcmFtZXItbW90aW9uJ11cbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCBpbmZvID0gKGFzc2V0SW5mby5uYW1lIHx8ICcnKS5zcGxpdCgnLicpO1xuICAgICAgICAgIGNvbnN0IGV4dCA9IGluZm9baW5mby5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAoL3BuZ3xqcGU/Z3xzdmd8Z2lmfHRpZmZ8Ym1wfGljby9pLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvaW1hZ2VzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoL3dvZmYyP3xlb3R8dHRmfG90Zi9pLnRlc3QoZXh0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGBhc3NldHMvZm9udHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXWA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBgYXNzZXRzL1tuYW1lXS1baGFzaF1bZXh0bmFtZV1gO1xuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qcydcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUV4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMseUNBQXlDO0FBQUEsUUFDeEQsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUEsY0FDaEM7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFLFlBQVk7QUFBQSxZQUNaLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixZQUFZ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
