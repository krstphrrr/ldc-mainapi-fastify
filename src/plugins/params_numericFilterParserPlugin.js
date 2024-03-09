const fp = require('fastify-plugin')
const dataGapSchema = require("../schemas/dataGapSchema")

async function filterParsePlugin(fastify, options) {

  fastify.decorate('filterParse', filterParse)
}

function filterParse(param, paramValue){
  // (key:value) | (key:value[and]key:value) simplified structure
  
  // ^((?<firstKey>(^[a-z]+:))(?<firstValue>([0-9]+|[0-9]+[^0-9][0-9]+)))$ first alternative, a comparison
  // operator with an open interval

  // ^((?<firstKey2>(^[a-z]+:))(?<firstValue2>([0-9]+|[0-9]+[^0-9][0-9]+))[^0-9]((?<separator>and)[^0-9](?<secondKey>([a-z]+:))(?<secondValue>([0-9]+|[0-9]+[^0-9][0-9]+))))$
  // second alternative; closed interval comparison operator

  // (?<firstKey>...) first capture group
  // ^[a-z]+: any number of undercase letters and colon
  // (?<firstValue>...)
  // 

  let wholeMatch = /^((?<firstKey>(^[a-z]+:))(?<firstValue>([0-9]+|[0-9]+[^0-9][0-9]+)))$|^((?<firstKey2>(^[a-z]+:))(?<firstValue2>([0-9]+|[0-9]+[^0-9][0-9]+))[^0-9]((?<separator>and)[^0-9](?<secondKey>([a-z]+:))(?<secondValue>([0-9]+|[0-9]+[^0-9][0-9]+))))$/s;

  let sqlQuery = ``
  let firstKey = paramValue.match(wholeMatch).groups['firstKey']
  let firstValue = paramValue.match(wholeMatch).groups['firstValue']

  if(paramValue.includes(paramValue.match(wholeMatch).groups.separator)){
      firstKey = paramValue.match(wholeMatch).groups['firstKey2']
      firstValue = paramValue.match(wholeMatch).groups['firstValue2']

      let secondKey = paramValue.match(wholeMatch).groups['secondKey']
      let secondValue = paramValue.match(wholeMatch).groups['secondValue']

      // start predicate
      sqlQuery += ` AND "${param}"`
      sqlQuery += ` ${parseOperator(firstKey)} ${firstValue} `
      
      sqlQuery += ` AND "${param}"`
      sqlQuery += ` ${parseOperator(secondKey)} ${secondValue}`

    } else {
      sqlQuery += ` AND "${param}"`
      sqlQuery += ` ${parseOperator(firstKey)} ${firstValue} `
      
    }  

  return sqlQuery
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