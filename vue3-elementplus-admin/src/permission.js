// 权限管理
import router from "@/router";
import store from "@/store";
// import { Message } from 'element-plus'
import nprogress from "nprogress";
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/cookies'
import getPageTitle from "./utils/get-page-title";

nprogress.configure({ showSpinner: false})

const whiteList = ['/login']

// 导航守卫：路由改变前发生变化
router.beforeEach(async (to, from, next) => {
  nprogress.start() // 程序进度条开始
  document.title = getPageTitle(to.meta.title) // 标签页的名称来自路由设置的meta字段
  const hasToken = getToken()
  if(hasToken){
    if(to.path === './login') {
      next({path:'/'})
      nprogress.done()
    }else {
      const hasGetUserInfo = store.getters.name
      if(hasGetUserInfo) {
        next()
      }else{
        next()
        nprogress.done()
      }
    }
  }else {
    if(whiteList.indexOf(to.path) !== -1){
      next()
    }else{
      next(`/login?redirect=${to.path}`)
      nprogress.done()
    }
  }
})

router.afterEach(() => [
  nprogress.done()
])