const express = require('express');
const path = require('path');
const app = express();

// 告诉服务器：把 /public 文件夹里的东西当成静态网站公开出去！
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Hour Vault 服务器已通过 Express 启动，端口 3000');
});