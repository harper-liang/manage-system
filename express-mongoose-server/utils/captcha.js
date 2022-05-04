// 生成验证码
var svgCaptcha = require('svg-captcha')
module.exports = svgCaptcha.create({
  width: 100,
  height: 40,
  size: 4, // 长度
  ignoreChars: '0oO1il', // 验证码排除字符
  color: true,
  noise: 0, // 干扰线
  background: '#eee',
})