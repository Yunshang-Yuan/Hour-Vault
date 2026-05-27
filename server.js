const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('欢迎来到 Hour Vault 时间银行！服务器已成功运行！');
});
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
