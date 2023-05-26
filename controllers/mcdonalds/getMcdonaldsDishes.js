const { McdonaldsDish } = require("../../models/mcdonaldsDish");
const { ctrlWrapper } = require("../../utils");

const getMcdonaldsDishes = async (req, res, next) => {
  const result = await McdonaldsDish.find({}, "-createdAt -updatedAt");
  return res.status(200).json(result);
};

module.exports = {
  getMcdonaldsDishes: ctrlWrapper(getMcdonaldsDishes),
};
