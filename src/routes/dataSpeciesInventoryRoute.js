const dataSpeciesInventorySchema = require('../schemas/dataSpeciesInventorySchema')
module.exports = async function (fastify, opts) {
  fastify.get('/dataSpeciesInventory', {
    schema: {query: dataSpeciesInventorySchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataSpeciesInventorySchema)
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