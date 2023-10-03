import FileModel from "../models/file-schema.js";

export const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };
  try {
    const result = await FileModel.create(fileObj);
    res.status(200).json({ path: `http://localhost:8000/file/${result._id}` });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({ error: error.message });
  }
};

export const getImageLink = async (req, res) => {
  try {
    const result = await FileModel.findById(req.params.fileId);
    result.downloadCount++;
    await result.save();
    res.download(result.path, result.name);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
