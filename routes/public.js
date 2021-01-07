'use strict';
const Router = require('koa-router'),
  router = new Router(),
  publicRouter = new Router(),
  {getMessage} = require('../controllers/message')

router
  .get('/msg', getMessage)

publicRouter
  .use('/public', router.routes(), router.allowedMethods())

module.exports = publicRouter
