const {
  getDocument,
  postDocument,
  updateName,
} = require("../controller/document.controller");

const { Router } = require("express");

const documentRouter = Router();

documentRouter.get("/:id/view", getDocument);
documentRouter.post("/add", postDocument);
documentRouter.patch("/:id/name", updateName);

module.exports = {
  documentRouter,
};
