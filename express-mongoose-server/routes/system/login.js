var express = require('express');
var router = express.Router();

var User = require('../../model/system/User')
router.post('/getLoginCode', (req, res, next)=>{
  var svgCaptcha =  require("./../../utils/captcha")
  console.log(svgCaptcha)
  // 生成验证码
  res.send(svgCaptcha)
  // 点击提交后，判断验证码是否过期
  // 1. 过期，重新生成
  // 2. 没过期，返回验证码成功
})
// 前端收到成功消息，再把登录表达发过来
// 查找用户信息，存在则生成token，返回给前端

/* GET home page. */
router.post('/', async(req, res, next) => {
  // 用创建好的model来对数据库操作
  await User.findOne(req.body.name,(err,docs)=>{
    if(!err){
      console.log("成功2",docs)
      res.send({data:docs,mes:"sucess"})
    }
  })
});
// router.post('/saveUser', async (req, res, next) =>{
//   await User.create(req.body,(err,data) =>{
//     if(!err){
//       console.log("成功1")
//       res.send(data)
//     }
//   })
//   console.log("q",req.body.name)
// })


module.exports = router;
