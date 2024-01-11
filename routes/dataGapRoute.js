

const dataGapSchema = require("../schemas/dataGapSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/dataGap', {
    schema: {query: dataGapSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataGapSchema,"dataGap")
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

// receive request, 
// parse token, 
// choose tenant.
// create pool
// stream pool 
