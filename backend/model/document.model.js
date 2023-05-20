const mongoose = require("mongoose");

const docuSchema = mongoose.Schema(
  {
    documentId: { type: String, required: true },
    name: { type: String, default: "Untitled Document" },
    content: [{ type: Array, required: true }],
  },
  {
    versionKey: false,
  }
);

const docuModel = mongoose.model("document", docuSchema);

module.exports = {
  docuModel,
};
