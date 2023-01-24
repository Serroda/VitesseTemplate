// vite.config.ts
import path from "path";
import { defineConfig, loadEnv } from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/vite@4.0.4/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/vite-plugin-pwa@0.14.1_vite@4.0.4/node_modules/vite-plugin-pwa/dist/index.mjs";
import vue from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/@vitejs+plugin-vue@4.0.0_vite@4.0.4+vue@3.2.45/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import checker from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/vite-plugin-checker@0.5.4_udrm6xadn5tcg4egijvekn26eu/node_modules/vite-plugin-checker/dist/esm/main.js";
import Pages from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/vite-plugin-pages@0.28.0_vite@4.0.4/node_modules/vite-plugin-pages/dist/index.mjs";
import Components from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/unplugin-vue-components@0.22.12_vue@3.2.45/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/unplugin-auto-import@0.12.1/node_modules/unplugin-auto-import/dist/vite.js";
import Unocss from "file:///D:/Code/VitesseTemplate/node_modules/.pnpm/unocss@0.48.4_vite@4.0.4/node_modules/unocss/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\Code\\VitesseTemplate";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
      }
    },
    test: {
      globals: true,
      environment: "happy-dom"
    },
    plugins: [
      vue(),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),
      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true
      }),
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          "vue",
          "vue-router",
          "pinia",
          "vitest"
        ],
        dts: true,
        dirs: [
          "./src/composables",
          "./src/stores",
          "./src/modules",
          "./src/test"
        ],
        vueTemplate: true
      }),
      // https://github.com/antfu/unocss
      Unocss(),
      //https://github.com/fi3ework/vite-plugin-checker
      checker({
        vueTsc: true
      }),
      //https://github.com/vite-pwa/vite-plugin-pwa
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: true
        },
        manifest: {
          name: env.VITE_PWA_NAME,
          short_name: env.VITE_PWA_SHORT_NAME,
          description: env.VITE_PWA_DESCRIPTION,
          theme_color: env.VITE_PWA_THEME_COLOR,
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXFZpdGVzc2VUZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxWaXRlc3NlVGVtcGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvVml0ZXNzZVRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCBQYWdlcyBmcm9tICd2aXRlLXBsdWdpbi1wYWdlcydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcblxuICByZXR1cm4ge1xuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB0ZXN0OiB7XG4gICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICB2dWUoKSxcblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXG4gICAgICBQYWdlcygpLFxuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tY29tcG9uZW50c1xuICAgICAgQ29tcG9uZW50cyh7XG4gICAgICAgIGR0czogdHJ1ZSxcbiAgICAgIH0pLFxuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgJ3Z1ZScsXG4gICAgICAgICAgJ3Z1ZS1yb3V0ZXInLFxuICAgICAgICAgICdwaW5pYScsXG4gICAgICAgICAgJ3ZpdGVzdCdcbiAgICAgICAgXSxcbiAgICAgICAgZHRzOiB0cnVlLFxuICAgICAgICBkaXJzOiBbXG4gICAgICAgICAgJy4vc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgICAnLi9zcmMvc3RvcmVzJyxcbiAgICAgICAgICAnLi9zcmMvbW9kdWxlcycsXG4gICAgICAgICAgJy4vc3JjL3Rlc3QnXG4gICAgICAgIF0sXG4gICAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgfSksXG5cbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bm9jc3NcbiAgICAgIFVub2NzcygpLFxuXG4gICAgICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9maTNld29yay92aXRlLXBsdWdpbi1jaGVja2VyXG4gICAgICBjaGVja2VyKHtcbiAgICAgICAgdnVlVHNjOiB0cnVlLFxuICAgICAgfSksXG5cbiAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL3ZpdGUtcHdhL3ZpdGUtcGx1Z2luLXB3YVxuICAgICAgVml0ZVBXQSh7XG4gICAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgICBkZXZPcHRpb25zOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBtYW5pZmVzdDoge1xuICAgICAgICAgIG5hbWU6IGVudi5WSVRFX1BXQV9OQU1FLFxuICAgICAgICAgIHNob3J0X25hbWU6IGVudi5WSVRFX1BXQV9TSE9SVF9OQU1FLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBlbnYuVklURV9QV0FfREVTQ1JJUFRJT04sXG4gICAgICAgICAgdGhlbWVfY29sb3I6IGVudi5WSVRFX1BXQV9USEVNRV9DT0xPUixcbiAgICAgICAgICBpY29uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzcmM6ICdwd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3JjOiAncHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgIF0sXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLE9BQU8sVUFBVTtBQUM5USxTQUFTLGNBQWMsZUFBZTtBQUN0QyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBUm5CLElBQU0sbUNBQW1DO0FBV3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLENBQUM7QUFFdkMsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDeEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxNQUFNO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBO0FBQUEsTUFHSixNQUFNO0FBQUE7QUFBQSxNQUdOLFdBQVc7QUFBQSxRQUNULEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQTtBQUFBLE1BR0QsV0FBVztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsVUFDSjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxNQUNmLENBQUM7QUFBQTtBQUFBLE1BR0QsT0FBTztBQUFBO0FBQUEsTUFHUCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsTUFDVixDQUFDO0FBQUE7QUFBQSxNQUdELFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLFlBQVk7QUFBQSxVQUNWLFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUixNQUFNLElBQUk7QUFBQSxVQUNWLFlBQVksSUFBSTtBQUFBLFVBQ2hCLGFBQWEsSUFBSTtBQUFBLFVBQ2pCLGFBQWEsSUFBSTtBQUFBLFVBQ2pCLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE9BQU87QUFBQSxjQUNQLE1BQU07QUFBQSxZQUNSO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
