import { defineComponent, shallowRef, watch } from 'vue'
import { ElConfigProvider } from 'element-plus'
import { useRoute } from 'vue-router'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Layouts from './layouts'

export default defineComponent({
  name: 'AppComponent',
  setup () {
    const route = useRoute()
    const Layout = shallowRef()
    watch(route, newVal => {
      // 路由改变的时候去更改 layout
      Layout.value = newVal?.meta?.layout || Layouts
    })
    const config = {
      size: 'default',
      message: {
        max: 3,
      },
      button: {
        autoInsertSpace: true,
      },
      locale: zhCn,
    }

    return () => (
      <ElConfigProvider {...config}>
        <main class="font-sans text-gray-700 dark:text-gray-200">
          <Layout.value>
            <router-view />
          </Layout.value>
        </main>
      </ElConfigProvider>
    )
  },
})
