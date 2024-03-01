const dataSoilHorizonsSchema = require("../schemas/dataSoilHorizonsSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/dataSoilHorizons', {
    schema: {query: dataSoilHorizonsSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataSoilHorizonsSchema)
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