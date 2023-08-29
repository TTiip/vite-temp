import { createApp } from 'vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from '~/App.vue'
import routes from '~/router'

// 预加载icon 并且使用icon的时候需要以下步骤之一
// 1.将标签设置为块级标
// 2.父级标签设置flex
// 3.自身标签设置flex
import '../unocss-icon'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 这里也可以配置 路由导航
// router.beforeEach((to, from, next) => {
//   if (to.matched.length === 0) {
//     // 如果未匹配到路由
//     from.name ? next({ name: from.name }) : next('/')
//   } else {
//     // 如果匹配到正确跳转
//     next()
//   }
// })

app.use(router)

app.mount('#app')
