import request from '@/utils/request'
const api = {}
api.getUser = (data) => {
  return request({ url: '/', method: 'post', data })
}
api.saveUser = (data) => {
  return request({ url: '/saveUser', method: 'post', data })
}
export default api