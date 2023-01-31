import { model, Schema, Document } from "mongoose";

interface IMessage extends Document {
    message: string;
    consecutivo: Number;
}

const MessageSchema = new Schema({
  message: {
    type: String,
  },

  consecutivo: {
    type: Number
  },
});

const MessageModel = model<IMessage>("Message", MessageSchema, "message");

export { MessageModel, IMessage };
