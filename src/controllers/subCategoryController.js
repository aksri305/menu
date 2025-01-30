import SubCategory from "../models/SubCategory.js";

export const createSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.create(req.body);
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) {
      return res.status(404).json({ error: "SubCategory not found" });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!subCategory) {
      return res.status(404).json({ error: "SubCategory not found" });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory) {
      return res.status(404).json({ error: "SubCategory not found" });
    }
    res.status(200).json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
