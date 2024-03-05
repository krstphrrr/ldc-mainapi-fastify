const fp = require('fastify-plugin')
const dataGapSchema = require("../schemas/dataGapSchema")

async function filterParsePlugin(fastify, options) {
  
  fastify.decorate('filterParse', filterParse)
}

function filterParse(queryParams, list){
  
  Object.keys(queryParams).forEach(param => {
    let greaterThan = /(gt):/
    let lessThan = /(lt):/
    //  if gt: included in param,
    // create string for query 
    // remove string from queryparam 
    // insert in dynamically generated query 
    if(list.includes(param)){
      if(queryParams[param].match(greaterThan)){
        // 
        queryParams[param] = (queryParams[param].replace(pattern,'')*1 )
      }
    }
  })

  return queryParams
}

async function parse(obj) {
 
}
module.exports = fp(filterParsePlugin, {
  fastify: '4.x',
  name: 'filterParsePlugin',
});