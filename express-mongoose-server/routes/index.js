module.exports = (app) => {
  const router = {}
  router.loginRouter = require("./system/login")
  router.userRouter = require("./system/users")
  for (let prop in router) {
    app.use(router[prop])
  }
  console.log("路由插件已注册")
}

