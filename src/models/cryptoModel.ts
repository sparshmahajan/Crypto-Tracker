import { Model, Document, Schema, model } from "mongoose";

interface CryptoAttrs {
  id: string;
  name: string;
}

interface CryptoModel extends Model<CryptoDoc> {
  build(attrs: CryptoAttrs): CryptoDoc;
}
export interface CryptoDoc extends Document {
  id: string;
  name: string;
}

const cryptoSchema = new Schema<CryptoDoc>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

cryptoSchema.statics.build = (attrs: CryptoAttrs) => {
  return new Crypto(attrs);
};

export const Crypto = model<CryptoDoc, CryptoModel>("crypto", cryptoSchema);
