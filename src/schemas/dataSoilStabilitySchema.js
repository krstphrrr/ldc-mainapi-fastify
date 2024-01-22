const dataSoilStabilitySchema = {
    $id: 'dataSoilStability',
    type: 'object',
    properties: {
      rid: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      PrimaryKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DBKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      ProjectKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      RecKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      FormType: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      FormDate: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
      LineKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      SoilStabSubSurface: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      Line: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      Position: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      Pos: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      Veg: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      Rating: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      Hydro: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      Notes: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      source: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DateLoadedInDb: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
      DateVisited: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
  }
}

module.exports = dataSoilStabilitySchema