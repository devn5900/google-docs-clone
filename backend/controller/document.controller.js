const { docuModel } = require("../model/document.model");

const getDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const status = await docuModel.findOne({ documentId: id });
    if (status) {
      res.status(200).json({ data: status });
    } else {
      res.status(400).json({ msg: "No Data Found" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};
const postDocument = async (req, res) => {
  const { id, data } = req.body;
  if (!id || !data || !Array.isArray(data)) {
    return res.status(400).json({ msg: "Invaid data" });
  }
  try {
    const itHas = await docuModel.findOne({ documentId: id });
    if (!itHas) {
      const stat = new docuModel({
        name: "Untitled Document",
        documentId: id,
        content: data,
      });
      const isSave = await stat.save();
      res.status(201).json({ msg: "Saved" });
    } else {
      const status = await docuModel.findOneAndUpdate(
        { documentId: id },
        { content: [...itHas.content, ...data] }
      );
      res.status(201).json({ msg: "Saved" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server Error" });
  }
};
const updateName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ msg: "Invaid data" });
  }
  try {
    const status = await docuModel.findOneAndUpdate(
      { documentId: id },
      { name }
    );
    res.status(201).json({ msg: "Name Updated" });
  } catch (error) {
    return res.status(500).json({ msg: "Server Error" });
  }
};
module.exports = {
  getDocument,
  postDocument,
  updateName,
};
