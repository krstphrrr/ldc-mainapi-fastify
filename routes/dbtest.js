
module.exports = async function (fastify, opts) {
  // fastify.get('/stream', fastify.getStreamingEndpoint(query));

  fastify.get('/getData/unrestricted', async (request, reply) => {
    const query = 'SELECT * FROM public_test."dataGap" LIMIT $1;'
    request.slowQuery = query

    try {
      console.log("DENTRO DE REQUEST ANTES DE PG")
      return fastify.streamingEndpoint(request, reply)
      
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
