/**
 * @author iitii
 * @date 2021/1/8 01:00
 */
'use strict'

const redis = require('redis'),
	config = require('../common.config.js'),
	client = redis.createClient(config.redis)

module.exports = {
	client
}
