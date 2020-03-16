import mongoose, { Document } from 'mongoose';

export interface IPurchase extends Document {
  id: string;
  userId: string;
  title: string;
  value: number;
}

const PurchaseSchema = new mongoose.Schema({
  userId: String,
  title: String,
  value: Number,
});

export default mongoose.model<IPurchase>('Purchase', PurchaseSchema);
