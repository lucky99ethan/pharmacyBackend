import { Request, Response } from 'express';
import Inventory from '../models/inventory';

// In-memory sales array (for demonstration; replace with DB in production)
const sales: any[] = [];

// Record a sale and update inventory
export const createSale = async (req: Request, res: Response) => {
    try {
        const { itemId, quantity, sellingPrice } = req.body;
        if (!itemId || !quantity || !sellingPrice) {
            return res.status(400).json({ message: 'itemId, quantity, and sellingPrice are required' });
        }
        // Find the inventory item
        const item = await Inventory.findOne({ $or: [{ _id: itemId }, { id: itemId }] });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        if (item.quantity < quantity) {
            return res.status(400).json({ message: 'Not enough stock' });
        }
        // Reduce quantity
        item.quantity -= quantity;
        await item.save();
        // Record the sale in memory
        const sale = {
            id: Date.now().toString(),
            itemId,
            name: item.name,
            quantity,
            unit: item.unit,
            sellingPrice,
            date: new Date().toISOString()
        };
        sales.push(sale);
        res.status(201).json({ message: 'Sale recorded and inventory updated', item, sale });
    } catch (error) {
        res.status(500).json({ message: 'Error processing sale', error });
    }
};

// Fetch all sales (in-memory)
export const getAllSales = (req: Request, res: Response) => {
    res.status(200).json({ sales });
};
