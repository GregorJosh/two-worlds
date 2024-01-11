import mongoose from "mongoose";

import user from "@/models/user";

mongoose.connect(process.env.DB_HOST!, { tls: true });
mongoose.Promise = global.Promise;

export const db = { user };
