import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

import categoryRoutes from "./routes/categoryRoutes.js";
import subCategoryRoutes from "./routes/subCategoryRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();

// Database Connection
connectDB();

// Middlewares
app.use(express.json()); // Parse incoming JSON requests
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // CORS setup
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/subcategories", subCategoryRoutes);
app.use("/api/items", itemRoutes);

// Error Handler (must come after routes)
app.use(errorHandler);

export default app;
