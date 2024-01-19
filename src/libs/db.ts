import mongoose from "mongoose";

import * as models from "@/models";

mongoose.connect(process.env.DB_HOST!);
mongoose.Promise = global.Promise;

export const db = models;
