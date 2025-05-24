import { Router, Application } from 'express';
import contactController from '../controllers/contactController';

const router = Router();

router.post('/contact', async (req, res, next) => { try { await contactController.createContact(req, res); } catch (err) { next(err); } });
router.get('/contact/:id', async (req, res, next) => { try { await contactController.getContactById(req, res); } catch (err) { next(err); } });
router.get('/contact', async (req, res, next) => { try { await contactController.getAllContacts(req, res); } catch (err) { next(err); } });
router.put('/contact/:id', async (req, res, next) => { try { await contactController.updateContact(req, res); } catch (err) { next(err); } });

export default function setContactRoutes(app: Application) {
    app.use('/api', router);
}