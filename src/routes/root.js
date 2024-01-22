'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/test/:rid', async function (req, reply) {
    // return { root: true }
    
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query(
      'SELECT * from public_test."dataGap" WHERE rid=$1',[req.params.rid],
    )
    // Note: avoid doing expensive computation here, this will block releasing the client
    return rows
    } finally {
      // Release the client immediately after query resolves, or upon error
      client.release()
    }
  })

}
