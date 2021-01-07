/**
 * @author iitii
 * @date 2021/1/8 00:54
 */
'use strict';
const uuid = require('uuid'),
  {setResponse} = require('../libs/utils'),
  redis_op = require('../libs/redis_op')

async function getMessage(ctx) {
  const reqBody = ctx.request.body
  if (reqBody.hasOwnProperty('token')) {
    if (uuid.validate(reqBody.token)) {
      return await redis_op
        .get(reqBody.token)
        .then(res => {
          setResponse(ctx, 200, res)
        })
        .catch(e => {
          setResponse(ctx, 500, e.message)
        })
    } else {
      setResponse(ctx, 404, 'Not a valid token')
    }
  } else {
    setResponse(ctx, 404, 'Required "token" ...')
  }
}

async function setMessage(ctx) {
  const reqBody = ctx.request.body
  if (reqBody.hasOwnProperty('msg')) {
    const token = uuid.v4()
    return await redis_op.set(token, reqBody.msg)
      .then(() => {
        setResponse(ctx, 200, {
          token
        })
      })
      .catch(e => {
        setResponse(ctx, 500, e.message)
      })
  } else {
    setResponse(ctx, 404, 'Required "msg" ...')
  }
}

module.exports = {
  getMessage,
  setMessage
}
