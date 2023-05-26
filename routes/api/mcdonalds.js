const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");

const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/mcdonaldsDish");

router.get("/", ctrl.getMcdonaldsDishes);

router.get("/:dishId", isValidId, ctrl.getMcdonaldsDishById);

router.post("/", validateBody(schemas.schema), ctrl.addMcdonaldsDish);

router.put(
  "/:dishId",
  isValidId,
  validateBody(schemas.schema),
  ctrl.updateMcdonaldsDish
);

router.patch(
  "/:dishId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusMcdonaldsDish
);

router.delete("/:dishId", isValidId, ctrl.removeMcdonaldsDish);

module.exports = router;
