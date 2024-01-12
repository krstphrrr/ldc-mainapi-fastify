const dataLPISchema = {
    $id: 'dataLPI',
    type: 'object',
    properties: {
      rid: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      PrimaryKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DBKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      ProjectKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      LineKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      RecKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      layer: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      code: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      chckbox: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      ShrubShape: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      FormType: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      FormDate: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
      Direction: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      Measure: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      LineLengthAmount: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      SpacingIntervalAmount: { anyOf: [{ type: 'number' }, { type: 'array', items: { type: 'number' } }] },
      SpacingType: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      ShowCheckbox: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      CheckboxLabel: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      PointLoc: { anyOf: [{ type: 'number' }, { type: 'array', items: { type: 'number' } }] },
      PointNbr: { anyOf: [{ type: 'integer' }, { type: 'array', items: { type: 'integer' } }] },
      source: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DateLoadedInDb: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
      DateVisited: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] }
    }
  }
  module.exports = dataLPISchema