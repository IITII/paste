const fs = require('fs');
const path = require('path');

function mkdir(dir, cb) {
  let paths = dir.split(path.sep);
  let index = 1;
  
  function next(index) {
    //递归结束判断
    if (index > paths.length)
      return cb();
    let newPath = paths.slice(0, index).join(path.sep);
    fs.access(newPath, function (err) {
      if (err) {//如果文件不存在，就创建这个文件
        fs.mkdir(newPath, function () {
          next(index + 1);
        });
      } else {
        //如果这个文件已经存在，就进入下一个循环
        next(index + 1);
      }
    })
  }
  
  next(index);
}

function setResponse(ctx, status, body) {
  ctx.response.status = status;
  // 通过 mime 字符串或文件扩展名设置响应 Content-Type
  // See: https://github.com/koajs/koa/blob/eda27608f7d39ede86d7b402aae64b1867ce31c6/lib/request.js#L639
  ctx.response.type = 'text/plain; charset=utf-8'
  ctx.response.body = body
}

module.exports = {
  mkdir,
  setResponse
}
