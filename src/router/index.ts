const routes = [
  {
    path: '/Index',
    name: 'Index',
    meta: {},
    component: () => import('~/pages/index'),
  },
  {
    path: '/index1',
    name: 'Index1',
    meta: {},
    component: () => import('~/pages/index1/index'),
  },
  {
    path: '/:catchAll(.*)',
    meta: {},
    redirect: '/404',
  },
  {
    path: '/',
    meta: {},
    redirect: '/index',
  },
  {
    path: '/404',
    name: '404',
    meta: {},
    component: () => import('~/pages/[...all]'),
  },
]

export default routes
