import { Request, Response } from 'express';
import Contact from '../models/contact';

class ContactController {
    async createContact(req: Request, res: Response) {
        const { fullName, email, phoneNumber, subject, message } = req.body;

        try {
            const newContact = new Contact({
                fullName,
                email,
                phoneNumber,
                subject,
                message
            });

            await newContact.save();
            res.status(201).json({ message: 'Contact created successfully', contact: newContact });
            console.log("Successfull Created")
        } catch (error) {
            console.log('Error creating contact:', error);
            res.status(500).json({ message: 'Error creating contact', error });
        }
    }

    async getContactById(req: Request, res: Response) {
        try {
            const contact = await Contact.findById(req.params.id);
            if (!contact) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.json(contact);
        } catch (error) {
            console.log('Error fetching contact:', error);
            res.status(500).json({ message: 'Error fetching contact', error });
        }
    }

    async getAllContacts(req: Request, res: Response) {
        try {
            const contacts = await Contact.find();
            res.json(contacts);
        } catch (error) {
            console.log('Error fetching contacts:', error);
            res.status(500).json({ message: 'Error fetching contacts', error });
        }
    }

    async updateContact(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const updatedContact = await Contact.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );
            if (!updatedContact) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.status(200).json({ message: 'Contact updated successfully', contact: updatedContact });
            console.log(`Contact with ID ${id} updated successfully.`);
        } catch (error) {
            console.log('Error updating contact:', error);
            res.status(500).json({ message: 'Error updating contact', error });
        }
    }

    // Additional CRUD methods can be added here
}

export default new ContactController();