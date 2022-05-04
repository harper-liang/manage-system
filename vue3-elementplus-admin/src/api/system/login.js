import request from '@/utils/request'
const api = {}
// 获取登陆验证码
api.getLoginCode = (data) => {
  return request({ url: '/getLoginCode', method: 'post', data })
}

export default api