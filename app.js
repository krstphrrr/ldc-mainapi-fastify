const path = require('node:path')
const AutoLoad = require('@fastify/autoload')

const awsJwtVerifyPlugin = require('./utils/awsJwtVerifyPlugin');

// Pass --options via CLI arguments in command to enable these options.
const options = {

}

// check for token on prehandler
// attach permission on request 
// overloaded pg parses permission and returns user 
// overloaded pg is used on batch/stream 
// const dataGapSchema = require("./schemas/dataGapSchema")
// module.exports = async function (fastify, opts) {
  // fastify.addSchema(dataGapSchema)
module.exports = async function (fastify, opts) {

  fastify.register(require('@fastify/postgres'),{
    name: 'unrestricted',
    host: process.env.UN_HOST,
    port: process.env.UN_PORT,
    database: process.env.UN_DB,
    user: process.env.UN_USER,
    password: process.env.UN_PW,
    max:20
  })
  fastify.register(require('@fastify/postgres'),{
    name: 'restricted',
    host: process.env.RES_HOST,
    port: process.env.RES_PORT,
    database: process.env.RES_DB,
    user: process.env.RES_USER,
    password: process.env.RES_PW,
    max:20
  })


  fastify.register(awsJwtVerifyPlugin, {
    userPoolId: process.env.USERPOOLID,
    tokenUse: process.env.TOKENUSE,
    clientId: process.env.CLIENTID,
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
  // fastify.register(AutoLoad, {
  //   dir: path.join(__dirname, 'routes'),
  //   options: Object.assign({}, opts)
  // })
}

module.exports.options = options
