const QueryStream = require('pg-query-stream')
const JSONStream = require('JSONStream')
const fastify = require('fastify')


// TEST STREAM ROUTE - NO PLUGIN
module.exports = async function(fastify, options){
  
  fastify.get('/api/stream', {
    schema: {
      query: {
        type: 'object',
        properties: {
          limit: { type: 'number', default: 50_000 }
        }
      }
    }
  },queryStream)
}

async function queryStream(request, reply){
  const client = await this.pg.unrestricted.connect()

  const slowQuery = `
    SELECT * FROM public_test."dataGap"

    LIMIT $1;
  `

  const query = new QueryStream(slowQuery, [request.query.limit], {
    highWaterMark: 500
  })

  const stream = client.query(query)
  stream.on('end', () => { client.release() })
  return stream.pipe(JSONStream.stringify())
}


