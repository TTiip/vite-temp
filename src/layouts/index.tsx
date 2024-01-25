import { KeepAlive, Transition, defineComponent, shallowRef } from 'vue'
import { ElAside, ElMain } from 'element-plus'
import type { RouteRecordRaw } from 'vue-router'
import { useRoute } from 'vue-router'
import menuData from '~/mock/menuData'
import Sidebar from '~/layouts/sidebar/index'
import Navigation from '~/layouts/navigation/index'
import TagsView from '~/layouts/tagsView/index'
import { getTagsViewInstance } from '~/composables/pinia'

export default defineComponent({
  name: 'Layouts',
  setup () {
    const isCollapse = shallowRef(false)
    const route = useRoute()
    const tagsViewInstance = getTagsViewInstance()

    return () => (
      <div class="flex h-screen">
        <ElAside width="auto" class="row-span-2 flex flex-col b-0 b-r-1 b-r-zinc-200 dark:b-r-zinc-700 shadow-md z-3">
          <header class="h-12 flex items-center shadow-md z-3 px-3 cursor-pointer">
            <img class="w-8 mx-1" src="../../public/logo.png" />
            <div class="relative overflow-hidden">
              <Transition enter-active-class="absolute" duration={ 300 } leave-active-class="absolute">
                <h1 v-show={ !isCollapse.value } class="ml-1 text-primary center text-gray-700 dark:text-gray-200">闲置交易管理系统</h1>
              </Transition>
            </div>
          </header>
          <Sidebar collapse={ isCollapse.value } defaultActive={ route.path } menuData={ menuData } class="row-span-2 flex-1 b-0 b-r-1 b-r-zinc-200 dark:b-r-zinc-700 shadow-md z-3" />
        </ElAside>

        <ElMain class="flex-1 grid grid-rows-[3rem_34px_auto] relative overflow-x-hidden">
          <Navigation class="h-40px" v-model={ [isCollapse.value, 'isCollapse'] } />
          <TagsView class="mt-6px" />
          <router-view v-slots={{
            default: ({ Component, route }: { Component: any; route: RouteRecordRaw }) => (
              <Transition mode="out-in" name="main" appear={ true }>
                <KeepAlive include={ tagsViewInstance.cachedViews } max={ 20 }>
                  <Component key={ route.path } />
                </KeepAlive>
              </Transition>
            ),
          }} />
        </ElMain>
      </div>
    )
  },
})
