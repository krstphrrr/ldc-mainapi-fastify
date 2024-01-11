const fp = require('fastify-plugin')
const dataGap = require('../routes/dataGapRoute')
const dataHeader = require('../routes/dataHeaderRoute')

async function streamPrefixPlugin(fastify, options) {
  fastify.register(dataGap,{
    prefix: '/api/stream'
  })

  fastify.register(dataHeader,{
    prefix: '/api/stream'
  })
  // add more streaming routes here
}
module.exports = fp(streamPrefixPlugin, {
  fastify: '4.x',
  name: 'streamPrefixPlugin',
});