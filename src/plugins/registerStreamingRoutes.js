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
const aeroSummary = require('../routes/dataAeroSummaryRoute')
const dataPlotCharacterization = require('../routes/dataPlotCharacterizationRoute')
const dataSoilHorizons = require('../routes/dataSoilHorizonsRoute')
const tblRHEM = require('../routes/tblRHEMRoute')

const permissionsTest = require('../routes/dataGapTest')
const PREFIX_CONSTANT = '/api/v1'
async function streamPrefixPlugin(fastify, options) {

  opts = {...options, prefix: PREFIX_CONSTANT}
  fastify.register(dataGap, opts)

  fastify.register(dataHeader, opts)

  fastify.register(dataHeight, opts)

  fastify.register(dataHorizontalFlux, opts)

  fastify.register(dataLPI, opts)

  fastify.register(dataSoilStability, opts)

  fastify.register(dataSpeciesInventory, opts)

  fastify.register(geoIndicators, opts)

  fastify.register(geoSpecies, opts)

  fastify.register(permissionsTest, opts)

  fastify.register(aeroSummary, opts)

  fastify.register(dataPlotCharacterization, opts)

  fastify.register(dataSoilHorizons, opts)

  fastify.register(tblRHEM, opts)


  
  // add more streaming routes here
}
module.exports = fp(streamPrefixPlugin, {
  fastify: '4.x',
  name: 'streamPrefixPlugin',
});