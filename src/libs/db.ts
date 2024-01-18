import mongoose from "mongoose";

import { User } from "@/models";

mongoose.connect(process.env.DB_HOST!);

export const db = { User };
