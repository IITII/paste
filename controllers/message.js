/**
 * @author iitii
 * @date 2021/1/8 00:54
 */
'use strict';
const {setResponse} = require('../lib/utils'),
  redis_op = require('../lib/redis_op')

async function getMessage(ctx, next){
  const reqBody = ctx.request.body
  if(reqBody.hasOwnProperty('token')){
  
  }else{
    setResponse(ctx, 404, 'Required "token" ...')
    return next()
  }
}

function setMessage(ctx,next){}

module.exports = {
  getMessage,
  setMessage
}
