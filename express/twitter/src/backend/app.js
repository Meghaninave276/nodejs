import express from "express";
import tweetRoutes from "./routes/tweetRoutes.js";
import logger from "./middleware/logger.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/tweets", tweetRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
