const dataGapSchema = require("../schemas/dataGapSchema")
module.exports = async function (fastify, opts) {
  fastify.get('/permissionsTest', {
    schema: {query: dataGapSchema},
    handler: async (request, reply) => {
      
      const query = fastify.dynamicQueryGen(request.query, dataGapSchema)
      request.slowQuery = testQuery()

      try {
        const preferredPool = await fastify.preferredPool(fastify.batchCheck.batch)
        return preferredPool(request, reply)
        
      } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
 );

 const testQuery = ()=> {

  const qry = `(
   select * from public_test."dataGap"
   where "ProjectKey" LIKE '%NDOW%' limit 1
 )
   UNION
 (
     select * from public_test."dataGap"
   where "ProjectKey" LIKE '%NWERN%' AND "FormDate" > '2022-01-01' limit 1
   )
   UNION
   (
     select * from public_test."dataGap"
   where "ProjectKey" LIKE '%Jornada%' limit 1
   )
   UNION
   (
     select * from public_test."dataGap"
   where "ProjectKey" LIKE '%BLM%' limit 1
   )
   UNION
   (
     select * from public_test."dataGap"
   where "ProjectKey" LIKE '%CRNG%' limit 1
   );`
  return qry
 } 
}