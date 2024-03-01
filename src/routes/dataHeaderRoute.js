const dataHeaderSchema = require("../schemas/dataHeaderSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/dataHeader', {
    schema: {query: dataHeaderSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataHeaderSchema)
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
