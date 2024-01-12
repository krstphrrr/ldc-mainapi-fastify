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
  let offset = request.query.offset
  const batchSize = request.query.limit
  if(request.query.skip){
    offset = request.query.skip
  }
  if(request.query.cursor){
    offset = request.query.cursor
  }

  if(batchSize && !offset){
    const result = await pool.query(slowQuery, [batchSize])
    return result.rows 
  } else if(batchSize && offset){
    const result = await pool.query(slowQuery, [batchSize, offset])
    return result.rows 
  } else if(!batchSize && offset){
    const result = await pool.query(slowQuery, null)
    return result.rows
  } else {
    const result = await pool.query(slowQuery, null)
    return result.rows
  }
  return result.rows
}

module.exports = fp(genericBatchPlugin, {
  fastify: '4.x',
  name: 'genericBatchPlugin',
});