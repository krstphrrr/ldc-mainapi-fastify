'use strict'

const fp = require('fastify-plugin')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

async function geoJSONParser(fastify, options){
  // initialize object that will maintain state for batch or not
  fastify.decorate('geoJSON', )
}


module.exports = fp(geoJSONParser, {
  fastify: '4.x',
  name: 'geoJSON'
})