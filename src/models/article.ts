import { models, model, Schema } from "mongoose";

const articleSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    content: {
      type: Array<String>,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

articleSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
});

export const Article = models.Article || model("Article", articleSchema);
