import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  taxType: { type: String, enum: ["fixed", "percentage"], default: "fixed" },
});

export default mongoose.model("Category", categorySchema);
