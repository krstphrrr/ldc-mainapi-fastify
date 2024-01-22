const fp = require('fastify-plugin')


async function dynamicQueryPlugin(fastify, options) {
  fastify.decorate('dynamicQueryGen', (queryPack, schema) => {

    // list of columns
    const columns = Object.keys(schema.properties)

    const queryParams = JSON.parse(JSON.stringify(queryPack));

    // Initialize the base query
    let sqlQuery = 'SELECT ';

    // Add the selected columns to the query
    sqlQuery += columns.map(column => `"${column}"`).join(', ');

    // Specify the table
    sqlQuery += ` FROM public_test."${schema.$id}" WHERE 1 = 1`;
    console.log(queryParams)
    console.log(Object.keys(queryParams).includes("start"))
    // Dynamically add conditions based on the presence of query parameters
    Object.keys(queryParams).forEach(param => {
      // if the param is start/end 
      console.log(param)
      if (param == "start"){
          sqlQuery += ` AND "DateVisited" >= '${queryParams[param]}'::DATE`
          console.log(`DELETED ${param} = ${queryParams[param]}`)
          delete queryParams[param]

        } else if(param == "end"){
          sqlQuery += ` AND "DateVisited" < '${queryParams[param]}'::DATE`
          console.log(`DELETED ${param} = ${queryParams[param]}`)
          delete queryParams[param]

        }
        
        
        // console.log(`DELETED ${param} = ${queryParams[param]}`)
        // delete queryParams[param]
      
      console.log(queryParams)
      console.log(sqlQuery)
      // IF QUERYSTRING PARAM  IS AN ARRAY:
      if (columns.includes(param) && typeof(queryParams[param])=="object") {
        // MULTIPLE PARAMS FOR PG
        let multiStr = ` AND "${param}" in (`
        
        let paramArray = queryParams[param]

        if (columns.includes(param) && typeof(paramArray[0])=="string") {
          multiStr += `'`
          multiStr += paramArray.join("', '")
          multiStr += `'`
        }
        if (columns.includes(param) && typeof(paramArray[0])=="number") {
          multiStr += paramArray.join(", ")
        }
        multiStr += `) `
        sqlQuery += multiStr
      }
      // IF QUERYSTRING PARAM IS NOT AN ARRAY:
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
    if("cursor" in queryParams || "offset" in queryParams || "skip" in queryParams){
      sqlQuery += ` OFFSET $2`
    }
    console.log(sqlQuery)
    return sqlQuery
    })
}

// function tablePreferredDate(tablename){
//   const FormDate = ["dataGap", ]
//   const DateVisited = ["dataHeader"]
//   switch(tablename){
//     case 'dataGap'
//   }
// }
module.exports = fp(dynamicQueryPlugin, {
  fastify: '4.x',
  name: 'dynamicQueryPlugin',
});