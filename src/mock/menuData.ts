import type { MenuItemType } from '~/types'

const data: MenuItemType[] = [
  {
    path: '/',
    name: '仪表盘',
    icon: 'i-iconoir:home',
    children: [],
  },
  {
    path: '/goods',
    name: '商品',
    icon: 'i-iconoir:google-docs',
    children: [
      {
        path: '/goods1',
        name: '商品列表',
        icon: '',
        children: [],
      },
      {
        path: '/goods2',
        name: '添加商品',
        icon: '',
        children: [],
      },
      {
        path: '/goods3',
        name: '商品分类',
        icon: '',
        children: [],
      },
      {
        path: '/goods4',
        name: '商品类型',
        icon: '',
        children: [],
      },
    ],
  },
  {
    path: '/order',
    name: '订单',
    icon: 'i-iconoir:network-right',
    children: [
      {
        path: '/order1',
        name: '订单列表',
        icon: '',
        children: [],
      },
      {
        path: '/order2',
        name: '订单设置',
        icon: '',
        children: [],
      },
    ],
  },
  {
    path: '/user',
    name: '权限',
    icon: 'i-iconoir:settings',
    children: [
      {
        path: '/user1',
        name: '用户列表',
        icon: '',
        children: [],
      },
      {
        path: '/user2',
        name: '角色列表',
        icon: '',
        children: [],
      },
    ],
  },
]

export default data
