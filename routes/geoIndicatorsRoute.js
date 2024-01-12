const geoIndicatorsSchema = require('../schemas/dataSpeciesInventorySchema')
module.exports = async function (fastify, opts) {
  fastify.get('/geoIndicators', {
    schema: {query: geoIndicatorsSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, geoIndicatorsSchema)
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