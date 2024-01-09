const fp = require('fastify-plugin');

async function genericBatchPlugin(fastify, options) {
// plugin to create a batch pg pool: requires the tenant property
// inside the request object to discriminate between users. 
  fastify.decorate('batchEndpoint', async (request, reply) => {
    try {
      const { slowQuery } = request;

      if (!slowQuery) {
        return reply.status(400).send({ error: 'Invalid request body' });
      }
      const extPool = await fastify.pgExtender(request)
      return getPostgresBatch(slowQuery, request, extPool);
    
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });
}

async function getPostgresBatch( slowQuery, request, pool) {
  const offset = request.query.offset
  const batchSize = request.query.limit

  const result = await pool.query(slowQuery, [batchSize])
  return result.rows
}

module.exports = fp(genericBatchPlugin, {
  fastify: '4.x',
  name: 'genericBatchPlugin',
});