import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import checker from 'vite-plugin-checker';
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      vue(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages(),

      // https://github.com/antfu/vite-plugin-components
      Components({
        dts: true,
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia'
        ],
        dts: true,
        dirs: [
          './src/composables',
          './src/stores'
        ],
        vueTemplate: true,
      }),

      // https://github.com/antfu/unocss
      Unocss(),

      //https://github.com/fi3ework/vite-plugin-checker
      checker({
        vueTsc: true,
      }),

      //https://github.com/vite-pwa/vite-plugin-pwa
      VitePWA({
        registerType: 'autoUpdate',
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
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      }),
    ],
  }
})
