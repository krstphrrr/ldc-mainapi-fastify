const dataLPISchema = require('../schemas/dataLPISchema')
module.exports = async function (fastify, opts) {
  fastify.get('/dataLPI', {
    schema: {query: dataLPISchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataLPISchema)
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