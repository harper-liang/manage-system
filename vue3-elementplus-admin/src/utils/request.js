// 拦截请求和响应
import axios from "axios";
import { ElMessageBox, ElMessage } from 'element-plus'
import { storeKey } from "vuex";
import {getToken} from './cookies'
const instance = axios.create({ // axios的实例
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: {}
})
// 拦截器：在请求或响应被then或catch处理前拦截
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做的事情：查看token是否存在，存在则
    if(storeKey.getters.token){
      config.headers['Authorization'] = getToken()
    }
    return config;
  },
  error => {
    // 请求发生错误后做什么
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    // 对响应数据做处理
    if(response.headers['content-type'] === 'application/vnd.ms-excel;charset=utf-8'){
      return response.data
    }
    const res = response.data
    if((res.code && res.code !== '000000') || (!res.code && res.err!==0)) {
      ElMessage({
          message: res.msg || 'Error',
          type: 'error',
          duration: 5 *  1000
      })
    }
    if(res.code === 'A99003' || res.err === 401 || res.err === 403 || res.err === 1001){
      ElMessageBox.config('登录凭证过期，是否重新登录？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 重置token
        route.push('/login')
      })
    } 
  },
 error => {
    // 对响应错误做相应处理
    ElMessage({
      ElMessage: error.ElMessage,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default instance

