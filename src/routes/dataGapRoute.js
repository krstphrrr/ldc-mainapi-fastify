

const dataGapSchema = require("../schemas/dataGapSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/dataGap', {
    schema: {query: dataGapSchema},
    handler: async (request, reply) => {
      let numList = await fastify.paramFilter(dataGapSchema)
      
      // test
      let queryPack = fastify.filterParse(request.query, numList )
      
      
      const query = fastify.dynamicQueryGen(queryPack, dataGapSchema)
      request.slowQuery = query
      // fastify.paramFilter(dataGapSchema)
      // fastify.filterParse(request.query, dataGapSchema, fastify.paramFilter)
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

// receive request, 
// parse token, 
// choose tenant.
// create pool
// stream pool 
