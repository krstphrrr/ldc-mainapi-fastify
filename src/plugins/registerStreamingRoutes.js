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

async function streamPrefixPlugin(fastify, options) {

  fastify.register(dataGap,{
    prefix: '/api/stream'
  })

  fastify.register(dataHeader,{
    prefix: '/api/stream'
  })

  fastify.register(dataHeight,{
    prefix: '/api/stream'
  })

  fastify.register(dataHorizontalFlux,{
    prefix: '/api/stream'
  })

  fastify.register(dataLPI,{
    prefix: '/api/stream'
  })

  fastify.register(dataSoilStability,{
    prefix: '/api/stream'
  })

  fastify.register(dataSpeciesInventory,{
    prefix: '/api/stream'
  })

  fastify.register(geoIndicators,{
    prefix: '/api/stream'
  })

  fastify.register(geoSpecies,{
    prefix: '/api/stream'
  })

  fastify.register(permissionsTest,{
    prefix: '/api/stream'
  })

  
  // add more streaming routes here
}
module.exports = fp(streamPrefixPlugin, {
  fastify: '4.x',
  name: 'streamPrefixPlugin',
});