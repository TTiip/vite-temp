import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { defineComponent, shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import Layouts from './layouts'

export default defineComponent({
  name: 'AppComponent',
  setup () {
    const route = useRoute()
    const Layout = shallowRef()
    watch(route, newVal => {
      // 当不需要隐藏layout时候 赋值layout
      if (!newVal?.meta?.noUseLayout) {
        // 路由改变的时候去更改 layout
        Layout.value = newVal?.meta?.layout || Layouts
      } else {
        Layout.value = null
      }
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
          {
            Layout.value
              ? (
                <Layout.value>
                  <router-view />
                </Layout.value>
              )
              : <router-view />
          }

        </main>
      </ElConfigProvider>
    )
  },
})
