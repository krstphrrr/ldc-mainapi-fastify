const fp = require('fastify-plugin')

async function preferredPlugin(fastify, options) {
  // plugin that depending on the route prefix, 
  // returns either a streaming pg pool or a batch pg pool
  fastify.decorate('preferredPool', poolDiscriminator)
}

async function poolDiscriminator(batchOrStream){

  if (batchOrStream.includes('stream')){
    return this.streamingEndpoint
  } else {
    return this.batchEndpoint
  }
}
module.exports = fp(preferredPlugin, {
  fastify: '4.x',
  name: 'preferredPlugin',
});