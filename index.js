import express from "express";
import { router } from "./routes/route.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();

app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
