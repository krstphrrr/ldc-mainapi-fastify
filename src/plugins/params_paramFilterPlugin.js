const fp = require('fastify-plugin')


async function paramFilter(fastify, options) {
  // extracts numerical fields on any schema to an array
  // to help validate which fields with gt / lt operator are not
  // strings or booleans 

  fastify.decorate('paramFilter', numberFilter)
}

async function numberFilter(schema){
  
  const filteredProperties = await filterIntegerProperties(schema);
  return filteredProperties
}

async function filterIntegerProperties(obj) {
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