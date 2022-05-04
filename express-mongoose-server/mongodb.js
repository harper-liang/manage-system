// 连接数据库

module.exports= app =>{
  // 当关闭项目时，关闭连接
  // app.on('close', () => {
  //   mongoose.disconnect()
  // })
  const mongoose = require('mongoose');
  var url = "mongodb://127.0.0.1:27017/admin-server";
  mongoose.connect(url)
  const connection = mongoose.connection;
  connection.on('error', console.error.bind(console, 'connection error'))
  connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });
  console.log('数据库连接成功')
}