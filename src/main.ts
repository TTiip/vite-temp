import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 预加载icon 并且使用icon的时候需要以下步骤之一
// 1.将标签设置为块级标
// 2.父级标签设置flex
// 3.自身标签设置flex
import '../unocss-icon'

// main.ts
import 'virtual:uno.css'

createApp(App).mount('#app')
