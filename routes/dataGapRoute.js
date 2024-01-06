
module.exports = async function (fastify, opts) {
  // fastify.get('/stream', fastify.getStreamingEndpoint(query));

  fastify.get('/dataGap', async (request, reply) => {
    const query = 'SELECT * FROM public_test."dataGap" LIMIT $1;'
    request.slowQuery = query

    try {
      const preferredPool = await fastify.preferredPool(opts.prefix)
      return preferredPool(request, reply)
      
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });

}
// receive request, 
// parse token, 
// choose tenant.
// create pool
// stream pool 
