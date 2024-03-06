
const dataHeaderSchema = {
  $id: 'dataHeader',
  type: 'object',
    properties: {
      PrimaryKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DBKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      ProjectKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DateVisited: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date'} }] },
      Latitude_NAD83: { anyOf: [{ type: 'number' }, { type: 'string' }, { type: 'array', items: { type: 'number' } }] },
      Longitude_NAD83: { anyOf: [{ type: 'number' }, { type: 'string' }, { type: 'array', items: { type: 'number' } }] },
      LocationType: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      EcologicalSiteID: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      PercentCoveredByEcoSite: { anyOf: [{ type: 'number' }, { type: 'string' }, { type: 'array', items: { type: 'number' } }] },
      SpeciesKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      PlotID: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DateLoadedInDb: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
      wkb_geometry: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      source: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      rid: { anyOf: [{ type: 'integer' }, { type: 'string' }, { type: 'array', items: { type: 'integer' } }] },
    },
};

module.exports = dataHeaderSchema