const dataSoilStabilitySchema = require('../schemas/dataSoilStabilitySchema')
module.exports = async function (fastify, opts) {
  fastify.get('/dataSoilStability', {
    schema: {query: dataSoilStabilitySchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataSoilStabilitySchema)
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