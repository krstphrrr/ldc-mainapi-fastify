const fp = require('fastify-plugin')
const dataGap = require('../routes/dataGapRoute')

async function batchPrefixPlugin(fastify, options) {
  fastify.register(dataGap,{
    prefix: '/api/batch'
  })

  // add more batch routes here
}
module.exports = fp(batchPrefixPlugin, {
  fastify: '4.x',
  name: 'batchPrefixPlugin',
});