const fp = require('fastify-plugin')

async function preferredPlugin(fastify, options) {
  // plugin that depending on the route prefix, 
  // returns either a streaming pg pool or a batch pg pool
  

  fastify.decorate('preferredPool', poolDiscriminator)
}

async function poolDiscriminator(batchOrStream){
  console.log(batchOrStream)
  if (batchOrStream==true){
    console.log("DEVUELVO BATCH")
    return this.batchEndpoint
  } else {
    console.log("DEVUELVO STREAM")
    return this.streamingEndpoint
  }
}
module.exports = fp(preferredPlugin, {
  fastify: '4.x',
  name: 'preferredPlugin',
});