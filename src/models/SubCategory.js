import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean },
  tax: { type: Number },
  parentCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

export default mongoose.model("SubCategory", subCategorySchema);
