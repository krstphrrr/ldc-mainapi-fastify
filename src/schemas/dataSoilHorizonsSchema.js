const dataSoilHorizonsSchema = {
  type: "object",
  properties: {
    ProjectKey: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    PrimaryKey: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    DBKey: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonKey: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonDepthUpper: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    HorizonDepthLower: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    DepthUOM: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonName: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Texture: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    TextureModifier: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    pH: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    EC: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    Effervescence: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    ClayPct: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    SandPct: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    StructureGrade: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    StructureSize: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    StructureType: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    StructureQuality: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Hue: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Value: {
      oneOf: [
        { type: "integer" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    Chroma: {
      oneOf: [
        { type: "integer" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    ColorMoistDry: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    HorizonNotes: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    SiltPct: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    FragVolGravel: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    FragVolCobble: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    FragVolStone: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    FragVolNodule: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    FragVolDurinode: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    HorizonNumber: {
      oneOf: [
        { type: "integer" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    source: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    rid: {
      oneOf: [
        { type: "integer" },
        { type: "array", items: { type: "integer" } },
      ],
    },
    DateVisited: {
      oneOf: [{ type: "string", format: "date" }, { type: "array", items: { type: "string", format: "date" } }],
    }, // Assuming string for date type
    DateLoadedInDb: {
      oneOf:  [{ type: "string", format: "date" }, { type: "array", items: { type: "string", format: "date" } }],
    }, // Assuming string for date type
  },
};
module.exports = dataSoilHorizonsSchema;
