import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean },
  tax: { type: Number },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  parentCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  parentSubCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory",
  },
});

export default mongoose.model("Item", itemSchema);
