'use strict'

const fp = require('fastify-plugin')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(async function (fastify, opts) {
  // initialize object that will maintain state for batch or not
  fastify.decorate('batchCheck', {
    batch:false
  })
})
