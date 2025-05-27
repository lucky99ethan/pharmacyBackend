import { Router, Application } from 'express';
import * as inventoryController from '../controllers/inventoryController';

const router = Router();

router.get('/inventory', async (req, res, next) => { try { await inventoryController.getAllInventory(req, res); } catch (err) { next(err); } });
router.get('/inventory/:id', async (req, res, next) => { try { await inventoryController.getInventoryById(req, res); } catch (err) { next(err); } });
router.post('/inventory', async (req, res, next) => { try { await inventoryController.createInventory(req, res); } catch (err) { next(err); } });
router.put('/inventory/:id', async (req, res, next) => { try { await inventoryController.updateInventory(req, res); } catch (err) { next(err); } });
router.delete('/inventory/:id', async (req, res, next) => { try { await inventoryController.deleteInventory(req, res); } catch (err) { next(err); } });

export default function setInventoryRoutes(app: Application) {
    app.use('/api', router);
}
