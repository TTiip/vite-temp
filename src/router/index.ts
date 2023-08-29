const routes = [
  { path: '/', component: () => import('~/pages/index') },
  { path: '/test1', component: () => import('~/pages/test1') },
  { path: '/test2', component: () => import('~/pages/test2') },
  { path: '/:catchAll(.*)', redirect: '/404' },
  { path: '/404', name: '404', component: () => import('~/pages/[...all]') },
]

export default routes
