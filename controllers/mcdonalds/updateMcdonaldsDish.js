const { McdonaldsDish } = require("../../models/mcdonaldsDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const updateMcdonaldsDish = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await McdonaldsDish.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });

  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  updateMcdonaldsDish: ctrlWrapper(updateMcdonaldsDish),
};
