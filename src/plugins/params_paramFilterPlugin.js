const fp = require('fastify-plugin')


function paramFilter(fastify, options, done) {
  // extracts numerical fields on any schema to an array
  // to help validate which fields with gt / lt operator are not
  // strings or booleans 

  fastify.decorate('numericFieldList', numberFilter)
  done()
}

function numberFilter(schema){
  
  const filteredProperties = filterIntegerProperties(schema);
  return filteredProperties
}

function filterIntegerProperties(obj) {
  const filteredObj = [];

  
  for (const key in obj.properties) {
      if (
        obj.properties[key].anyOf[0].type === 'integer' ||
        obj.properties[key].anyOf[0].type === 'number'
        ) {
          filteredObj.push(key)
      }
  }
  return filteredObj;
}
module.exports = fp(paramFilter, {
  fastify: '4.x',
  name: 'paramFilterPlugin',
});