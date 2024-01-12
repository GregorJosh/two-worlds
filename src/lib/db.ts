import mongoose from "mongoose";

import user from "@/models/user";

mongoose.connect(process.env.DB_HOST!);
console.log("db connected successfully");

export const db = { user };
