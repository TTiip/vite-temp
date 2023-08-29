## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from '../../../../composables'
```

now, you can use

```ts
import { isDark } from '~/composables'
```

路由元 在组件中支持两种写法
```
1.
/**
  <route lang="yaml">
    component: ~/layouts/index.tsx
    meta:
      title: 文章管理
      showId: true
  </route>
*/
```

```
2.
export default defineComponent({
  name: 'ArticleManagePage',
  setup () {
    return () => (
      <route lang="yaml">
        component: ~/layouts/index.tsx
        meta:
          title: 文章管理
          showId: true
      </route>
    )
  }
})
```
```
注意点！！！

路由元只能写在动态生成的路由的page中，写在page组件中不生效！！！

例如
├── article-manage
│   ├── index.tsx (这里写没用！)
│─── article-manage.tsx (这里写！！！)


```
