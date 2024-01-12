import mongoose from "mongoose";

import user from "@/models/user";

mongoose.connect(process.env.DB_HOST!);

export const db = { user };
