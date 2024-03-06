const dataSoilHorizonsSchema = {
  type: "object",
  properties: {
    ProjectKey: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    PrimaryKey: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    DBKey: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonKey: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonDepthUpper: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    HorizonDepthLower: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    DepthUOM: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonName: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Texture: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    TextureModifier: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    pH: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    EC: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    Effervescence: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    ClayPct: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    SandPct: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    StructureGrade: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    StructureSize: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    StructureType: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    StructureQuality: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Hue: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Value: {
      anyOf: [
        { type: "integer" }, { type: "string" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    Chroma: {
      anyOf: [
        { type: "integer" }, { type: "string" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    ColorMoistDry: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonNotes: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    SiltPct: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    FragVolGravel: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    FragVolCobble: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    FragVolStone: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    FragVolNodule: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    FragVolDurinode: {
      anyOf: [{ type: "number" }, { type: "string" },{ type: "array", items: { type: "number" } }],
    },
    HorizonNumber: {
      anyOf: [
        { type: "integer" }, { type: "string" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    source: {
      anyOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    rid: {
      anyOf: [
        { type: "integer" }, { type: "string" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    DateVisited: {
      anyOf: [{ type: "string", format: "date" }, { type: "array", items: { type: "string", format: "date" } }],
    }, // Assuming string for date type
    DateLoadedInDb: {
      anyOf:  [{ type: "string", format: "date" }, { type: "array", items: { type: "string", format: "date" } }],
    }, // Assuming string for date type
  },
};
module.exports = dataSoilHorizonsSchema;
