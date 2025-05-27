import { Request, Response } from 'express';
import Inventory from '../models/inventory';

// Fetch all inventory items
export const getAllInventory = async (req: Request, res: Response) => {
    try {
        const items = await Inventory.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching inventory', error });
    }
};

// Fetch inventory item by ID
export const getInventoryById = async (req: Request, res: Response) => {
    try {
        const item = await Inventory.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching item', error });
    }
};

// Delete inventory item by ID
export const deleteInventory = async (req: Request, res: Response) => {
    try {
        const item = await Inventory.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting item', error });
    }
};

// Edit inventory item by ID
export const updateInventory = async (req: Request, res: Response) => {
    try {
        const updateData = { ...req.body };
        const item = await Inventory.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: 'Error updating item', error });
    }
};

// Create new inventory item
export const createInventory = async (req: Request, res: Response) => {
    try {
        const newItem = new Inventory(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ message: 'Error creating item', error });
    }
};
