const fp = require('fastify-plugin');


async function pgExtender(fastify, options){
  // plugin to determine which pg user configuration to return
  // from the tenant property inside the request object. 
  // (NDOW, BLM, etc)
  const pool = fastify.pg
  fastify.decorate('pgExtender', (request) => { 
    if(request.hasOwnProperty('tenant')){
      switch(request.tenant){
        case 'unrestricted':
          console.log("OPCION UNRESTRICTED")
          return pool.unrestricted

        case 'restricted':
          console.log("OPCION RESTRICTED")
          return pool.restricted
      }
    } else {
      return pool.restricted
    }
  })
}

module.exports = fp(pgExtender, {
  fastify: '4.x',
  name: 'pgExtender',
});