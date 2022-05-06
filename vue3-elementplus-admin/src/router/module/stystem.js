import Layout from '@/layout'
const routes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/error/notFound'), hidden: true },
  { path: '/', component: Layout, redirect: '/login' },
  {
    path: '/system',
    component: Layout,
    meta: { title: '系统设置', meta: '/system' },
    children: [
      {path: 'user',name: 'user', component: () => import('@/views/system/user/index')}
    ]
  },
  {path: '/:pathMath(.*)*', redirect: './404', hidden: true} // 用户进入没定义过的路由，就跳到notfound页面

]
export default routes