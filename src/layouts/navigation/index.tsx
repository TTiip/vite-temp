import { TransitionGroup, computed, defineComponent, withModifiers } from 'vue'
import { ElBreadcrumb, ElBreadcrumbItem, ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { useVModel } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router'
import ChooseTheme from '~/layouts/navigation/choose-theme'
import { getTagsViewInstance } from '~/composables/pinia'
import { isFullscreen, toggleFullscreen } from '~/composables/full-screen'

import './index.css'

export default defineComponent({
  name: 'Navigation',
  props: ['isCollapse'],
  setup (props, { emit }) {
    const user: any = {}
    const tagsViewInstance = getTagsViewInstance()

    // 使用 useVModel 处理 props 偷个懒搞成双向绑定。
    const isCollapse = useVModel(props, 'isCollapse', emit)

    const route = useRoute()
    const router = useRouter()
    // 过滤出 meta 中含有 title 的数据
    const list = computed(() => router.resolve(route)?.matched.filter(i => i?.meta.title))
    // const list: any = []
    return () => {
      return (
        <nav class="flex gap-3 items-center text-sm px-3">
          <i class={ `cursor-pointer text-18px ${isCollapse.value ? 'i-iconoir:transition-right' : 'i-iconoir:transition-left'}` } onClick={ () => isCollapse.value = !isCollapse.value } />

          <ElBreadcrumb class="mr-auto relative">
            <TransitionGroup name="breadcrumb">
              {
                list.value.map((item: any) => (
                  <ElBreadcrumbItem key={ item.meta?.title }>
                    <router-link class="cursor-pointer! font-400!" to={ item } onClick={ withModifiers(() => tagsViewInstance.pushRoute(item), ['stop']) }>
                      { item.meta?.title }
                    </router-link>
                  </ElBreadcrumbItem>
                ))
              }
            </TransitionGroup>
          </ElBreadcrumb>

          <ChooseTheme />
          <button class={`btn text-18px ${isFullscreen.value ? 'i-iconoir:collapse' : 'i-iconoir:expand'}`} onClick={ toggleFullscreen } />
          <ElDropdown
            v-slots={{
              dropdown: () => (
                <>
                  <ElDropdownMenu>
                    <ElDropdownItem class="mt-1.5!" onClick={ () => router.push('/') }>
                      控制台
                    </ElDropdownItem>
                    <ElDropdownItem divided class="mt-1.5!" onClick={ () => user.logout() }>
                      退出登陆
                    </ElDropdownItem>
                  </ElDropdownMenu>
                </>
              ),
            }}
          >
            欢迎您, admin
          </ElDropdown>
        </nav>
      )
    }
  },
})
