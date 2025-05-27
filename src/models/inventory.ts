import mongoose, { Document, Schema } from 'mongoose';

export interface IInventory extends Document {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  dosage: string;
  quantity: number;
  unit: string;
  buyingPrice: number;
}

const InventorySchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  category: { type: String, required: true },
  dosage: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  buyingPrice: { type: Number, required: true }
});

export default mongoose.model<IInventory>('Inventory', InventorySchema);
