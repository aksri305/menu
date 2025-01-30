import Item from "../models/Item.js";

export const createItem = async (req, res) => {
  try {
    const totalAmount = req.body.baseAmount - (req.body.discount || 0);
    const item = await Item.create({ ...req.body, totalAmount });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const searchItems = async (req, res) => {
  try {
    const items = await Item.find({ name: new RegExp(req.query.name, "i") });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
