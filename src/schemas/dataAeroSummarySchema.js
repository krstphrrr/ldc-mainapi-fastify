const dataAeroSummarySchema = {
  $id: 'aero_summary',
  type: "object",
  properties: {
    PrimaryKey: {
      oneOf: [{ type: "string" }, { type: "array", items: { type: "string" } }],
    },
    horizontal_flux_total_LPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    horizontal_flux_total_UPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    horizontal_flux_total_MD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    horizontal_flux_total_MN: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    horizontal_flux_total_STD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    vertical_flux_LPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    vertical_flux_UPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    vertical_flux_MD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    vertical_flux_MN: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    vertical_flux_STD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM1_LPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM1_UPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM1_MD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM1_MN: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM1_STD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM2_5_LPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM2_5_UPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM2_5_MD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM2_5_MN: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM2_5_STD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM10_LPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM10_UPI: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM10_MD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM10_MN: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    PM10_STD: {
      oneOf: [{ type: "number" }, { type: "array", items: { type: "number" } }],
    },
    rid: {
      oneOf: [
        { type: "integer" },
        { type: "array", items: { type: "integer" } },
      ],
    },
  },
};

module.exports = dataAeroSummarySchema