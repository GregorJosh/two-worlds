import mongoose, { Document, FilterQuery, Model } from "mongoose";

import * as models from "@/models";

const errors: string[] = [];

let isConnected = false;

if (process.env.DB_HOST) {
  mongoose.connect(process.env.DB_HOST);

  isConnected = true;
}

export const db = {
  errors,
  isConnected,
  ...models,
};

export function query<DocumentType>(
  model: Model<DocumentType>,
  filter: FilterQuery<DocumentType>
) {
  if (db.isConnected) {
    const result = model.findOne<DocumentType & Document>(filter);

    return result;
  }

  errors.push("Not connected to db!");

  return null;
}
