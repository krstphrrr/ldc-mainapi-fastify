
module.exports = async function (fastify, opts) {
  fastify.get('/getData/:tenant', async (request, reply) => {
    const { tenant } = request.params;
  
    if (!fastify.tenant[tenant]) {
      return reply.status(404).send({ error: 'Database not found' });
    }
  
    const pool = fastify.tenant[tenant];
  
    try {
      const result = await pool.query('SELECT * FROM public_test."dataGap" where "ProjectKey" LIKE \'%NDOW%\' LIMIT 10;');
      reply.send(result.rows);
    } catch (error) {
      reply.status(500).send({ error: 'Internal Server Error' });
    }
  });

}
