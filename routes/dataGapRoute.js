
const dataGapSchema = require("../schemas/dataGapSchema")
module.exports = async function (fastify, opts) {
  // fastify.get('/stream', fastify.getStreamingEndpoint(query));

  fastify.get('/dataGap', {
    schema: {query: dataGapSchema},
    handler: async (request, reply) => {
      // console.log(request.query)
      const query = await dynamicQuery(request.query)
      // const test = fastify.queryParse(request.query, dataGapSchema)
      
      // const query = 'SELECT * FROM public_test."dataGap" LIMIT $1;'
      request.slowQuery = query

      try {
        const preferredPool = await fastify.preferredPool(opts.prefix)
        return preferredPool(request, reply)
        
      } catch (error) {
        reply.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
 );
}

function dynamicQuery(queryPack){
  const columns = [
    "rid",
    "PrimaryKey",
    "DBKey",
    "ProjectKey",
    "RecType",
    "SeqNo",
    "GapStart",
    "GapEnd",
    "Gap",
    "LineKey",
    "RecKey",
    "FormDate",
    "DateModified",
    "FormType",
    "Direction",
    "Measure",
    "LineLengthAmount",
    "GapMin",
    "GapData",
    "PerennialsCanopy",
    "AnnualGrassesCanopy",
    "AnnualForbsCanopy",
    "OtherCanopy",
    "Notes",
    "NoCanopyGaps",
    "NoBasalGaps",
    "DateLoadedInDb",
    "PerennialsBasal",
    "AnnualGrassesBasal",
    "AnnualForbsBasal",
    "OtherBasal",
    "source",
    "DateVisited"
    
  ]
  
  const queryParams = JSON.parse(JSON.stringify(queryPack));
  console.log(queryParams)


  // Initialize the base query
  let sqlQuery = 'SELECT ';

  // Add the selected columns to the query
  sqlQuery += columns.map(column => `"${column}"`).join(', ');

  // Specify the table
  sqlQuery += ' FROM public_test."dataGap" WHERE 1 = 1';

  // Dynamically add conditions based on the presence of query parameters
  Object.keys(queryParams).forEach(param => {
    console.log(typeof(queryParams[param]))
    if (columns.includes(param) && typeof(queryParams[param])=="string") {
      sqlQuery += ` AND "${param}" = '${queryParams[param]}'`;
    }
    if (columns.includes(param) && typeof(queryParams[param])=="number") {
      sqlQuery += ` AND "${param}" = ${queryParams[param]}`;
    }
    
  });
  if("limit" in queryParams){
    sqlQuery += ` LIMIT $1`
  }
  if("cursor" in queryParams || "offset" in queryParams){
    sqlQuery += ` OFFSET $2`
  }
  console.log(sqlQuery)
  return sqlQuery
}
// receive request, 
// parse token, 
// choose tenant.
// create pool
// stream pool 
