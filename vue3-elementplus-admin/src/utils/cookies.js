import jsCookie from "js-cookie";
const TokenKey = 'token'; // 服务器和客户端之间的验证密钥，一般由服务器生成并存储，客户端发送用户名和密码，服务端验证
// 客户端每次向服务端请求资源的时候需要带着服务端签发的token
// 客户端对token的操作
export function getToken(){
  return jsCookie.get(TokenKey)
}
export function setToken(token) {
  return jsCookie.set(TokenKey, token)
}
// export function setMenulist (menulist) {
//   console.log(menulist)
//   return localStorage.setItem('menulist', JSON.stringify(menulist))
// }

// export function getUsername () {
//   return JSON.parse(localStorage.getItem('username'))
// }

// export function setUsername (username) {
//   return localStorage.setItem('username', JSON.stringify(username))
// }
export function removeToken(){
  return jsCookie.remove(TokenKey)
}
