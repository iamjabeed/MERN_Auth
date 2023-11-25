import express from "express";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/userRoutes.js";

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(port, () => console.log(`listening on ${port}`));
