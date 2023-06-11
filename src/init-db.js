import mongoose from "mongoose";
import fs from "fs";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config()

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI).then(r => "connected to db");

const database = JSON.parse(fs.readFileSync('./database.json', 'utf-8'));