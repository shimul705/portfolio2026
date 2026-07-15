import mongoose, { Schema, models, model } from "mongoose";

export interface ContactDocument {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<ContactDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Contact =
  models.Contact || model<ContactDocument>("Contact", ContactSchema);
