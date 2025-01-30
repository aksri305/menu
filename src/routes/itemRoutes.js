import express from "express";
import { createItem, searchItems } from "../controllers/itemController.js";

const router = express.Router();

router.post("/", createItem);
router.get("/search", searchItems);

export default router;
