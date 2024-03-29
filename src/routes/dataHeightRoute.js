const dataHeightSchema = require('../schemas/dataHeightSchema')
module.exports = async function (fastify, opts) {
  fastify.get('/dataHeight', {
    schema: {query: dataHeightSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataHeightSchema)
      request.slowQuery = query

      try {
        const preferredPool = await fastify.preferredPool(fastify.batchCheck.batch)
        return preferredPool(request, reply)
        
      } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
 );
}