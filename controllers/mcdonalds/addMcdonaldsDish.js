const { McdonaldsDish } = require("../../models/mcdonaldsDish");
const { ctrlWrapper } = require("../../utils");

const addMcdonaldsDish = async (req, res, next) => {
  const result = await McdonaldsDish.create(req.body);
  return res.status(201).json(result);
};

module.exports = {
  addMcdonaldsDish: ctrlWrapper(addMcdonaldsDish),
};
