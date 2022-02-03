'use strict'

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const uuid = require('uuid'),
	redis = require('../libs/redis_op.js')

module.exports = {
	name: 'paste',
	rest: '/paste',

	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		get_msg: {
			rest: 'GET /msg',
			params: {
				token: {type: 'string', min: 3,}
			},
			async handler(ctx) {
				const {token} = ctx.params
				ctx.meta.$responseType = 'text/plain'
				return redis.get(token)
			}
		},
		post_msg: {
			rest: 'POST /msg',
			params: {
				token: {type: 'string', min: 3, optional: true},
				msg: {type: 'string', min: 1},
			},
			async handler(ctx) {
				let {token, msg} = ctx.params
				if (!token) {
					token = uuid.v4()
				}
				await redis.set(token, msg)
				return {token}
			}
		},
		post_url: {
			rest: 'POST /url',
			params: {
				token: {type: 'string', min: 3, optional: true},
				msg: {type: 'string', min: 1},
			},
			async handler(ctx) {
				const res = await this.broker.call('paste.post_msg', ctx.params)
				return res.token
			}
		}
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
}
