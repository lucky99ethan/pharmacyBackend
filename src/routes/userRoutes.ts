import { Router, Application } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/user', async (req, res, next) => { try { await userController.getAllUsers(req, res); } catch (err) { next(err); } });
router.get('/user/:id', async (req, res, next) => { try { await userController.getUserById(req, res); } catch (err) { next(err); } });
router.delete('/user/:id', async (req, res, next) => { try { await userController.deleteUser(req, res); } catch (err) { next(err); } });

export default function setUserRoutes(app: Application) {
    app.use('/api', router);
}
