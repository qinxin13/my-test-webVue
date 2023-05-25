import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import viteCompression from 'vite-plugin-compression';
import dayjs from 'dayjs';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    viteCompression(),
    checker({
      vueTsc: true,
      overlay: {
        initialIsOpen: false,
      },
      enableBuild: false,
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['./vite.svg'],
    }),
    Components({
      dirs: [],//不自动导入sr/components的组件作为组件
      dts: false,//无需生成全局组件类型文件
      resolvers: ElementPlusResolver(),
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve('src/assets/styles/var.less')}";`,
        },
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  define: {
    'process.env.buildTime': JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1024,//超过1mb警告
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-chunk-[hash].js',
        assetFileNames: (chunkInfo) => /\.css$/.test(chunkInfo.name || '') ? 'css/[name]-[hash].[ext]' : 'assets/[name]-[hash].[ext]',
        manualChunks: function (id) {//防止文件因为异步块问题碎片化
          if (/node_modules\/.*\.css$/.test(id)) {
            return;
          }
          if (/node_modules\/(vue|vue-router|pinia)/.test(id)) {
            return 'vue';
          }

          if (/node_modules\/element-plus\//.test(id)) {
            return 'elementui';
          }

          if (/node_modules/.test(id)) {
            return 'vendor';
          }
        }
      },
    }
  },
  server: {
    // host: '0.0.0.0',
    port: 9527,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true,
      },
    },
  }
})
