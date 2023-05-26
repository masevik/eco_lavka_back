const { McdonaldsDish } = require("../../models/mcdonaldsDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const removeMcdonaldsDish = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await McdonaldsDish.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json({ message: "Contact deleted" });
};

module.exports = {
  removeMcdonaldsDish: ctrlWrapper(removeMcdonaldsDish),
};
