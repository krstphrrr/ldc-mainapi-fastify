const fp = require('fastify-plugin')
const dataGapSchema = require("../schemas/dataGapSchema")

async function filterParsePlugin(fastify, options) {
  
  fastify.decorate('filterParse', filterParse)
}

function filterParse(queryParams, list){
  console.log("PRE EVERYTHING: ", queryParams)
  // (?<firstKey>...) first capture group
  // ^[a-z]+: any number of undercase letters and colon
  // (?<firstValue>...)

  let wholeMatch = /^((?<firstKey>(^[a-z]+:))(?<firstValue>([0-9]+|[0-9]+[^0-9][0-9]+)))$|^((?<firstKey2>(^[a-z]+:))(?<firstValue2>([0-9]+|[0-9]+[^0-9][0-9]+))[^0-9]((?<separator>and)[^0-9](?<secondKey>([a-z]+:))(?<secondValue>([0-9]+|[0-9]+[^0-9][0-9]+))))$/s;

  let sqlQuery = ``
  const queryParamsReal = JSON.parse(JSON.stringify(queryParams))
  if(typeof queryParamsReal["GapMin"] == 'string'){
    console.log("MATCH SI O NO: ", queryParamsReal["GapMin"].match(wholeMatch))
    queryParamsReal.GapMin = (queryParamsReal["GapMin"].replace(wholeMatch,'5')*1)
    Object.keys(queryParams).forEach(param => {
      
      //  if gt: included in param,
      // create string for query 
      // remove string from queryparam 
      // insert in dynamically generated query 
      if(list.includes(param)){
        let firstKey = queryParams[param].match(wholeMatch).groups['firstKey']
        let firstValue = queryParams[param].match(wholeMatch).groups['firstValue']

        console.log(`COLUMN ${param} is inside list: ${list} `)
        let completeString = queryParams[param]
        console.log("complete string: ", completeString)
        // if()
        // if there's an and
        if(queryParams[param].includes(queryParams[param].match(wholeMatch).groups.separator)){
          let firstKey = queryParams[param].match(wholeMatch).groups['firstKey2']
          let firstValue = queryParams[param].match(wholeMatch).groups['firstValue2']
          let secondKey = queryParams[param].match(wholeMatch).groups['secondKey']
          let secondValue = queryParams[param].match(wholeMatch).groups['secondValue']
  
          console.log("whole match sep")
          // start predicate
          sqlQuery += ` AND "${param}"`
          sqlQuery += ` ${parseOperator(firstKey)} ${firstValue} `
          
          sqlQuery += ` AND "${param}"`
          sqlQuery += ` ${parseOperator(secondKey)} ${secondValue}`
  
        } else {
          sqlQuery += ` AND "${param}"`
          sqlQuery += ` ${parseOperator(firstKey)} ${firstValue} `
          
        }  
      } 
    })
    
  }
  

  
  // REQUIRES: 
  // - list of numeric fields to validate the request
  // - request.query object
 
  
  console.log("IT EXISTS: ",sqlQuery)
 

  return queryParamsReal
}

function parseOperator(obj) {
  switch(obj){
    case "gt:":
      return ">"
    case "lt:":
      return "<"
    case "get:":
      return ">="
    case "let:":
      return "<="
  }
}
module.exports = fp(filterParsePlugin, {
  fastify: '4.x',
  name: 'filterParsePlugin',
});