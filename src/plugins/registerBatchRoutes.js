const fp = require('fastify-plugin')
const dataGap = require('../routes/dataGapRoute')
const dataHeader = require('../routes/dataHeaderRoute')
const dataHeight = require('../routes/dataHeightRoute')
const dataHorizontalFlux = require('../routes/dataHorizontalFluxRoute')
const dataLPI = require('../routes/dataLPIRoute')
const dataSoilStability = require('../routes/dataSoilStabilityRoute')
const dataSpeciesInventory = require('../routes/dataSpeciesInventoryRoute')
const geoIndicators = require('../routes/geoIndicatorsRoute') 
const geoSpecies = require('../routes/geoSpeciesRoute')

const permissionsTest = require('../routes/dataGapTest')

async function batchPrefixPlugin(fastify, options) {
  fastify.register(dataGap,{
    prefix: '/api/batch'
  })

  fastify.register(dataHeader,{
    prefix: '/api/batch'
  })

  fastify.register(dataHeight,{
    prefix: '/api/batch'
  })

  fastify.register(dataHorizontalFlux,{
    prefix: '/api/batch'
  })

  fastify.register(dataLPI,{
    prefix: '/api/batch'
  })

  fastify.register(dataSoilStability,{
    prefix: '/api/batch'
  })

  fastify.register(dataSpeciesInventory,{
    prefix: '/api/batch'
  })

  fastify.register(geoIndicators,{
    prefix: '/api/batch'
  })

  fastify.register(geoSpecies,{
    prefix: '/api/batch'
  })

  fastify.register(permissionsTest,{
    prefix: '/api/batch'
  })
  // add more batch routes here
}
module.exports = fp(batchPrefixPlugin, {
  fastify: '4.x',
  name: 'batchPrefixPlugin',
});