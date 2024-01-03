'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')

const multitenantPlugin = require('./utils/multitenant')
// Pass --options via CLI arguments in command to enable these options.
const options = {
  dotenv: true
}

module.exports = async function (fastify, opts) {
  fastify.register(multitenantPlugin, {
    tenants: [
      {
        name: 'unrestricted',
        user: process.env.UN_USER,
        host: process.env.UN_HOST,
        database: process.env.UN_DB,
        password: process.env.UN_PW,
        port: process.env.UN_PORT,
      },
      {
        name: 'restricted',
        user: process.env.RES_USER,
        host: process.env.RES_HOST,
        database: process.env.RES_DB,
        password: process.env.RES_PW,
        port: process.env.RES_PORT,
      },
      // Add more databases as needed
    ],
  });

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = options
