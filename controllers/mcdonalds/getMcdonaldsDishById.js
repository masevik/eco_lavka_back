const { McdonaldsDish } = require("../../models/mcdonaldsDish");
const { HttpError, ctrlWrapper } = require("../../utils");

const getMcdonaldsDishById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await McdonaldsDish.findById(
    contactId,
    "-createdAt -updatedAt"
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }

  return res.status(200).json(result);
};

module.exports = {
  getMcdonaldsDishById: ctrlWrapper(getMcdonaldsDishById),
};
