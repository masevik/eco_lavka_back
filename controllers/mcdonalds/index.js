const { getMcdonaldsDishes } = require("./getMcdonaldsDishes");
const { getMcdonaldsDishById } = require("./getMcdonaldsDishById");
const { addMcdonaldsDish } = require("./addMcdonaldsDish");
const { updateMcdonaldsDish } = require("./updateMcdonaldsDish");
const { updateStatusMcdonaldsDish } = require("./updateStatusMcdonaldsDish");
const { removeMcdonaldsDish } = require("./removeMcdonaldsDish");

module.exports = {
  getMcdonaldsDishes,
  getMcdonaldsDishById,
  addMcdonaldsDish,
  updateMcdonaldsDish,
  updateStatusMcdonaldsDish,
  removeMcdonaldsDish,
};
