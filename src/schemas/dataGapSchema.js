
const dataGapSchema = {
  $id: 'dataGap',
  type: 'object',
  properties: {
    rid: {
      anyOf: [
        { type: 'integer' },
        { type: 'array', items: { type: 'integer' } },
      ],
       
    },
    PrimaryKey: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    DBKey: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    ProjectKey: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    RecType: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    SeqNo: {
      anyOf: [
        { type: 'integer' },
        { type: 'array', items: { type: 'integer' } },
      ],
       
    },
    GapStart: {
      anyOf: [
        { type: 'number' },
        { type: 'array', items: { type: 'number' } },
      ],
       
    },
    GapEnd: {
      anyOf: [
        { type: 'number' },
        { type: 'array', items: { type: 'number' } },
      ],
       
    },
    Gap: {
      anyOf: [
        { type: 'number' },
        { type: 'array', items: { type: 'number' } },
      ],
       
    },
    LineKey: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    RecKey: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    FormDate: {
      anyOf: [
        { type: 'string', format: 'date' },
        { type: 'array', items: { type: 'string', format: 'date' } },
      ],
       
    },
    DateModified: {
      anyOf: [
        { type: 'string', format: 'date' },
        { type: 'array', items: { type: 'string', format: 'date' } },
      ],
       
    },
    FormType: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    Direction: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    Measure: {
      anyOf: [
        { type: 'integer' },
        { type: 'array', items: { type: 'integer' } },
      ],
       
    },
    LineLengthAmount: {
      anyOf: [
        { type: 'number' },
        { type: 'array', items: { type: 'number' } },
      ],
       
    },
    GapMin: {
      anyOf: [
        { type: 'number' },
        { type: 'array', items: { type: 'number' } },
        // validation exception test for gt: lt: operators
        { type: 'string' }
      ],
       
    },
    GapData: {
      anyOf: [
        { type: 'integer' },
        { type: 'array', items: { type: 'integer' } },
      ],
       
    },
    PerennialsCanopy: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    AnnualGrassesCanopy: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    AnnualForbsCanopy: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    OtherCanopy: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    Notes: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    NoCanopyGaps: {
      anyOf: [
        { type: 'integer' },
        { type: 'array', items: { type: 'integer' } },
      ],
       
    },
    NoBasalGaps: {
      anyOf: [
        { type: 'integer' },
        { type: 'array', items: { type: 'integer' } },
      ],
       
    },
    DateLoadedInDb: {
      anyOf: [
        { type: 'string', format: 'date' },
        { type: 'array', items: { type: 'string', format: 'date' } },
      ],
       
    },
    PerennialsBasal: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    AnnualGrassesBasal: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    AnnualForbsBasal: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    OtherBasal: {
      anyOf: [
        { type: 'boolean' },
        { type: 'array', items: { type: 'boolean' } },
      ],
       
    },
    source: {
      anyOf: [
        { type: 'string' },
        { type: 'array', items: { type: 'string' } },
      ],
       
    },
    DateVisited: {
      anyOf: [
        { type: 'string', format: 'date' },
        { type: 'array', items: { type:'string', format: 'date'}},
      ],
    }
  }
}


module.exports = dataGapSchema
