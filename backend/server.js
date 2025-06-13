import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { config } from "dotenv";
config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Adjust this to your frontend URL
};

app.use(cors(corsOptions));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  });

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});
