import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 支持 js 相关的api (某些场景下可能导致 测试用例执行不通过 例如24号例子)
  test: {
    // environment: 'cxr',
    environment: 'happy-dom',
  },
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
  },
  plugins: [
    vue(),
    VueJsx(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
