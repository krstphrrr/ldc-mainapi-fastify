const geoSpeciesSchema = require('../schemas/geoSpeciesSchema')
module.exports = async function (fastify, opts) {
  fastify.get('/geoSpecies', {
    schema: {query: geoSpeciesSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, geoSpeciesSchema)
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