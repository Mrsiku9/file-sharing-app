import express from "express";
import Route from "./routes/route.js";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDB from "./database/db.js";

const app = express();
const port = 8000;
app.use(cors());
app.use("/", Route);
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

ConnectDB(username,password);
// ConnectDB();

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
