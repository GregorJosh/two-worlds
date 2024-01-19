import mongoose from "mongoose";

import * as models from "@/models";

let isConnected = false;

if (process.env.DB_HOST) {
  mongoose.connect(process.env.DB_HOST);
  
  isConnected = true;
}

export const db = {
  isConnected,
  ...models,
};
