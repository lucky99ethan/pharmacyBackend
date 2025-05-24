import { Router, Application } from 'express';
import { register, login } from '../controllers/authController';

const router = Router();

router.post('/register', async (req, res) => {
  try {
    await register(req, res);
    console.log('User registration successful');
  } catch (error) {
    console.log('User registration error:', error);
    res.status(500).json({ message: 'Registration failed', error: error instanceof Error ? error.message : error });
  }
});

router.post('/login', async (req, res) => {
  try {
    await login(req, res);
    console.log('User login successful');
  } catch (error) {
    console.log('User login error:', error);
    res.status(500).json({ message: 'Login failed', error: error instanceof Error ? error.message : error });
  }
});

export default function setAuthRoutes(app: Application) {
  app.use('/api/auth', router);
}
