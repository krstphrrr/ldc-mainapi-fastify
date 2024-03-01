const dataPlotCharacterizationSchema = require("../schemas/dataPlotCharacterizationSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/dataPlotCharacterization', {
    schema: {query: dataPlotCharacterizationSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataPlotCharacterizationSchema)
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

