import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import setContactRoutes from './routes/contactRoutes';
import setAuthRoutes from './routes/authRoutes';
import setUserRoutes from './routes/userRoutes';
import setInventoryRoutes from './routes/inventoryRoutes';
import salesRouter from './routes/salesRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

mongoose.set('useFindAndModify', false);

// Routes
setContactRoutes(app);
setAuthRoutes(app);
setUserRoutes(app);
setInventoryRoutes(app);
app.use('/api/sales', salesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});