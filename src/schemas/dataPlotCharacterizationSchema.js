const dataPlotCharacterizationSchema = {
  $id: 'dataPlotCharacterization',
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
    EstablishDate: {
      oneOf: [{ type: "string", format: 'date'}, { type: "array", items: { type: "string", format: 'date' } }],
    }, // Assuming string for date type
    State: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    County: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    EcolSite: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    ParentMaterial: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Slope: {
      oneOf: [{ type: 'number' }, { type: 'string' }, { type: "array", items: { type: "number" } }],
    },
    Aspect: {
      oneOf: [{ type: 'number' }, { type: 'string' }, { type: "array", items: { type: "number" } }],
    },
    LandscapeType: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    LandscapeTypeSecondary: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Elevation: {
      oneOf: [{ type: 'number' }, { type: 'string' }, { type: "array", items: { type: "number" } }],
    },
    SoilSeries: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    Longitude_NAD83: {
      oneOf: [{ type: 'number' }, { type: 'string' }, { type: "array", items: { type: "number" } }],
    },
    Latitude_NAD83: {
      oneOf: [{ type: 'number' }, { type: 'string' }, { type: "array", items: { type: "number" } }],
    },
    SlopeShapeVertical: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    SlopeShapeHorizontal: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    MLRA: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
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
      oneOf: [{ type: "string", format: 'date'}, { type: "array", items: { type: "string", format: 'date' } }],
    }, // Assuming string for date type
    DateLoadedInDb: {
      oneOf: [{ type: "string", format: 'date' }, { type: "array", items: { type: "string", format: 'date' } }],
    }, // Assuming string for date type
  },
};

module.exports = dataPlotCharacterizationSchema