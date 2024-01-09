const fp = require('fastify-plugin');

const QueryStream = require('pg-query-stream');
const JSONStream = require('JSONStream');


async function genericStreamingPlugin(fastify, options) {
  // plugin to create a streaming pg pool: requires the tenant property
// inside the request object to discriminate between users. 

  fastify.decorate('streamingEndpoint', async (request, reply) => {
    try {
      const { slowQuery } = request;

      if (!slowQuery) {
        return reply.status(400).send({ error: 'Invalid request body' });
      }
      const extPool = await fastify.pgExtender(request)
      return getPostgresStream(slowQuery, request, extPool);
    
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });
}

async function getPostgresStream( slowQuery, request, pool) {
  
  const client = await pool.connect()
  // console.log(request.query)
  console.log("PART4",slowQuery)
  let query
  if(request.query.limit){
    query = new QueryStream(slowQuery, [request.query.limit],{
      highWaterMark: 500
    })
  } else {
    query = new QueryStream(slowQuery,null,{
      highWaterMark: 500
    })
    
  }
  // console.log(query)

  const stream = client.query(query)
  stream.on('end', () => { client.release() })
  return stream.pipe(JSONStream.stringify())
}


module.exports = fp(genericStreamingPlugin, {
  fastify: '4.x',
  name: 'genericStreamingPlugin',
});