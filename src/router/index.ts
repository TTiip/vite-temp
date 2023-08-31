import Default from '~/components/layouts/default'
import Test from '~/components/layouts/test'

const routes = [
  {
    path: '/Index',
    name: 'Index',
    meta: {
      layout: Default,
    },
    component: () => import('~/pages/index'),
  },
  {
    path: '/index1',
    name: 'Index1',
    meta: {
      layout: Test,
    },
    component: () => import('~/pages/index1'),
  },
  {
    path: '/:catchAll(.*)',
    meta: {
      layout: Default,
    },
    redirect: '/404',
  },
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/404',
    name: '404',
    meta: {
      layout: Default,
    },
    component: () => import('~/pages/[...all]'),
  },
]

export default routes
