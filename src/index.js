import dotenv from "dotenv";
dotenv.config(); // Load environment variables

import express from "express";
import connectDB from "./config/db.js"; // Import database connection

const app = express();

// Connect to MongoDB
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
