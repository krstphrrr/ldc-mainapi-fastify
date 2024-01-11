const Joi = require('joi');
    // rid: {
    //   anyOf: [
    //     {
    //       type:"number",
    //       minimum: 0,
    //     },
    //     {
    //       type: "array",
    //       items: {
    //         type:"number",
    //         minimum: 0,
    //       }
    //     }
    //   ]
    // },
// const dataGapSchema = {
//   $id: 'dataGap',
//   type: 'object',
//   properties: {
//     rid: {
//       type: 'integer', 
  
//       nullable: true 
//     },

//     PrimaryKey: { type: 'string', nullable: true },
//     DBKey: { type: 'string', nullable: true },
//     ProjectKey: { type: 'string', nullable: true },
//     RecType: { type: 'string', nullable: true },
//     SeqNo: { type: 'integer', nullable: true },
//     GapStart: { type: 'number', nullable: true },
//     GapEnd: { type: 'number', nullable: true },
//     Gap: { type: 'number', nullable: true },
//     LineKey: { type: 'string', nullable: true },
//     RecKey: { type: 'string', nullable: true },
//     FormDate: { type: 'string', format: 'date', nullable: true },
//     DateModified: { type: 'string', format: 'date', nullable: true },
//     FormType: { type: 'string', nullable: true },
//     Direction: { type: 'string', nullable: true },
//     Measure: { type: 'integer', nullable: true },
//     LineLengthAmount: { type: 'number', nullable: true },
//     GapMin: { type: 'number', nullable: true },
//     GapData: { type: 'integer', nullable: true },
//     PerennialsCanopy: { type: 'boolean', nullable: true },
//     AnnualGrassesCanopy: { type: 'boolean', nullable: true },
//     AnnualForbsCanopy: { type: 'boolean', nullable: true },
//     OtherCanopy: { type: 'boolean', nullable: true },
//     Notes: { type: 'string', nullable: true },
//     NoCanopyGaps: { type: 'integer', nullable: true },
//     NoBasalGaps: { type: 'integer', nullable: true },
//     DateLoadedInDb: { type: 'string', format: 'date', nullable: true },
//     PerennialsBasal: { type: 'boolean', nullable: true },
//     AnnualGrassesBasal: { type: 'boolean', nullable: true },
//     AnnualForbsBasal: { type: 'boolean', nullable: true },
//     OtherBasal: { type: 'boolean', nullable: true },
//     source: { type: 'string', nullable: true },
//     DateVisited: { type: 'string', format: 'date', nullable: true },
//   }
// }
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


module.exports = dataGapSchema;

  // const dataGapSchema = Joi.object({
  //     // rid: Joi.number().integer().allow(null),
  //     rid: Joi.array().items(Joi.number().integer()),
  //     PrimaryKey: Joi.string().allow(null),
  //     DBKey: Joi.string().allow(null),
  //     ProjectKey: Joi.string().allow(null),
  //     RecType: Joi.string().allow(null),
  //     SeqNo: Joi.number().integer().allow(null),
  //     GapStart: Joi.number().allow(null),
  //     GapEnd: Joi.number().allow(null),
  //     Gap: Joi.number().allow(null),
  //     LineKey: Joi.string().allow(null),
  //     RecKey: Joi.string().allow(null),
  //     FormDate: Joi.date().allow(null),
  //     DateModified: Joi.date().allow(null),
  //     FormType: Joi.string().allow(null),
  //     Direction: Joi.string().allow(null),
  //     Measure: Joi.number().integer().allow(null),
  //     LineLengthAmount: Joi.number().allow(null),
  //     GapMin: Joi.number().allow(null),
  //     GapData: Joi.number().integer().allow(null),
  //     PerennialsCanopy: Joi.boolean().allow(null),
  //     AnnualGrassesCanopy: Joi.boolean().allow(null),
  //     AnnualForbsCanopy: Joi.boolean().allow(null),
  //     OtherCanopy: Joi.boolean().allow(null),
  //     Notes: Joi.string().allow(null),
  //     NoCanopyGaps: Joi.number().integer().allow(null),
  //     NoBasalGaps: Joi.number().integer().allow(null),
  //     DateLoadedInDb: Joi.date().allow(null),
  //     PerennialsBasal: Joi.boolean().allow(null),
  //     AnnualGrassesBasal: Joi.boolean().allow(null),
  //     AnnualForbsBasal: Joi.boolean().allow(null),
  //     OtherBasal: Joi.boolean().allow(null),
  //     source: Joi.string().allow(null),
  //     DateVisited: Joi.date().allow(null),
  //     limit: Joi.number().integer(),
  // }).options({ presence: 'optional' })

// };

module.exports = dataGapSchema
