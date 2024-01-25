const dataAeroSummarySchema = require("../schemas/dataAeroSummarySchema")
module.exports = async function (fastify, opts) {
  fastify.get('/dataAeroSummary', {
    schema: {query: dataAeroSummarySchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataAeroSummarySchema)
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