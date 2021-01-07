/**
 * @author iitii
 * @date 2021/1/7 23:56
 */
'use strict';

const Router = require('koa-router'),
  router = new Router(),
  privateRouter = new Router(),
  {setMessage} = require('../controllers/message')


router
  .post('/msg', setMessage)

privateRouter
  .use('/private', router.routes(), router.allowedMethods())

module.exports = privateRouter
