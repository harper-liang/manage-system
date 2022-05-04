const router = {}
router.MenuRouter = require('./system/Menu')
router.UserRouter = require('./system/User')
module.exports = (app) => {
  for(let prop in router){
    app.use(router[prop])
  }
}