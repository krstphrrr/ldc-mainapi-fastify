const fp = require('fastify-plugin')
const dataGap = require('../routes/dataGapRoute')

async function streamPrefixPlugin(fastify, options) {
  fastify.register(dataGap,{
    prefix: '/api/stream'
  })
  // add more streaming routes here
}
module.exports = fp(streamPrefixPlugin, {
  fastify: '4.x',
  name: 'streamPrefixPlugin',
});