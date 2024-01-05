const fp = require('fastify-plugin');


async function pgExtender(fastify, options){
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