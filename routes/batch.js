
//  TEST BATCH ROUTE - NO PLUGIN
module.exports = async function(fastify, options){
  fastify.get('/api/batch', {
    schema:{
      query: {
        type: 'object',
        properties: {
          offset: { type: 'number', default: 0},
          limit: { type: 'number', default: 50_000},
        }
      }
    }
  },queryBatch)
}

async function queryBatch(request, reply){
  const offset = request.query.offset
  const batchSize = request.query.limit

  const slowQuery = `
  SELECT * FROM public_test."dataGap"

  OFFSET $1
  LIMIT $2;
  `
  const result = await this.pg.unrestricted.query(slowQuery, [offset, batchSize])
  return result.rows
  // const notImplemented = new Error('not Implemented')
  // notImplemented.statusCode = 426  
  // throw notImplemented
}