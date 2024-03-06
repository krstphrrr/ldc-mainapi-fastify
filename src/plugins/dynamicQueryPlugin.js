const fp = require('fastify-plugin')


async function dynamicQueryPlugin(fastify, options) {
  fastify.decorate('dynamicQueryGen', (queryPack, schema) => {
    console.log("DYNAMICQUERY")
    // LIST OF NUMERIC FIELDS FOR EACH SCHEMA
    const numberFields = fastify.numericFieldList(schema)
    
    
    // list of columns
    const columns = Object.keys(schema.properties)

    const queryParams = JSON.parse(JSON.stringify(queryPack));

    // Initialize the base query
    let sqlQuery = 'SELECT ';

    // Add the selected columns to the query
    sqlQuery += columns.map(column => `"${column}"`).join(', ');

    // Specify the table
    if(schema.$id!="aero_summary"){
      sqlQuery += ` FROM public_test."${schema.$id}" WHERE 1 = 1`;
    } else {
      sqlQuery += ` FROM aero_data."${schema.$id}" WHERE 1 = 1`;
    }
    
    if(queryParams.hasOwnProperty('batch')){
      // parse batch queryparam
      queryParams.batch = queryParams.batch.toLowerCase()
      
      if(queryParams.batch == 'true'){
        
        
        fastify.batchCheck.batch = true
        delete queryParams.batch
      } else{
        
        fastify.batchCheck.batch = false
        delete queryParams.batch
      }

      
    }
    
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
      if (
        columns.includes(param) && 
        typeof(queryParams[param])=="string"
        // CHECK IF STRING FIELD IS ACTUALLY A NUMBER COLUMN 
        ) {
          // if the queryparam is NOT string value for a NUMERIC FIELD
          if(!numberFields.includes(param)){
            sqlQuery += ` AND "${param}" = '${queryParams[param]}'`;

          } else {
          // if the queryparam IS a string value for a NUMERIC FIELD
            sqlQuery += fastify.filterParse(param, queryParams[param])
          }
      }
      if (columns.includes(param) && typeof(queryParams[param])=="number") {
        // HERE parse with filterParse plugin
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