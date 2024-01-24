import mongoose from "mongoose";

import * as models from "@/models";

mongoose.connect(process.env.DB_HOST!);

export const db = {
  ...models,
};
