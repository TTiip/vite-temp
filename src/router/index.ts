const routes = [
  { path: '/', component: () => import('~/pages/index') },
  { path: '/test1', component: () => import('~/pages/test1') },
  { path: '/test2', component: () => import('~/pages/test2') },
]

export default routes
