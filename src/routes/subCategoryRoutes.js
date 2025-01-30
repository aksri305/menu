import express from "express";
import { createSubCategory } from "../controllers/subCategoryController.js";

const router = express.Router();

router.post("/", createSubCategory);

export default router;
