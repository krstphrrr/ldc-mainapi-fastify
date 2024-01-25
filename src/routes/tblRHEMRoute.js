const tblRHEMSchema = require("../schemas/tblRHEMSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/tblRHEM', {
    schema: {query: tblRHEMSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, tblRHEMSchema)
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