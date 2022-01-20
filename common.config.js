'use strict'

module.exports = {
	api: {
		port: 4000
	},
	redis: {
		host: process.env.REDIS_HOST || 'localhost',
		port: process.env.REDIS_PORT || 6379
	}
}
