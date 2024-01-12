const dataHorizontalFluxSchema = require('../schemas/dataHorizontalFluxSchema')
module.exports = async function (fastify, opts) {
  fastify.get('/dataHorizontalFlux', {
    schema: {query: dataHorizontalFluxSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataHorizontalFluxSchema)
      request.slowQuery = query

      try {
        const preferredPool = await fastify.preferredPool(opts.prefix)
        return preferredPool(request, reply)
        
      } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
 );
}