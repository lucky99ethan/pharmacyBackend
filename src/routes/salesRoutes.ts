import { Router } from 'express';
import { createSale, getAllSales } from '../controllers/salesController';

const router = Router();

// POST /api/sales
router.post('/', (req, res, next) => {
  Promise.resolve(createSale(req, res)).catch(next);
});
// GET /api/sales
router.get('/', (req, res, next) => {
  Promise.resolve(getAllSales(req, res)).catch(next);
});

export default router;
