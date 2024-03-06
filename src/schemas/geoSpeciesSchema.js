const geoSpeciesSchema = {
    $id: 'dataLPI',
    type: 'object',
    properties: {
      rid: { anyOf: [{ type: 'integer' }, { type: 'string' }, { type: 'array', items: { type: 'integer' } }] },
      PrimaryKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DBKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      ProjectKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      Species: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      AH_SpeciesCover: { anyOf: [{ type: 'number' }, { type: 'string' }, { type: 'array', items: { type: 'number' } }] },
      AH_SpeciesCover_n: { anyOf: [{ type: 'integer' }, { type: 'string' }, { type: 'array', items: { type: 'integer' } }] },
      Hgt_Species_Avg: { anyOf: [{ type: 'number' }, { type: 'string' }, { type: 'array', items: { type: 'number' } }] },
      Hgt_Species_Avg_n: { anyOf: [{ type: 'integer' }, { type: 'string' }, { type: 'array', items: { type: 'integer' } }] },
      Duration: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      GrowthHabit: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      GrowthHabitSub: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      SpeciesKey: { anyOf: [{ type: 'string' }, { type: 'array', items: { type: 'string' } }] },
      DateLoadedInDb: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
      DateVisited: { anyOf: [{ type: 'string', format: 'date' }, { type: 'array', items: { type: 'string', format: 'date' } }] },
  },
}

module.exports = geoSpeciesSchema