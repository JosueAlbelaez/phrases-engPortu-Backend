import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import connectDB from './config/db';
import phraseRoutes from './routes/phrases';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/phrases', phraseRoutes);


const PORT = process.env.PORT || 5000;

// Connect to database
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(colors.yellow.bold(`Server running on port ${PORT}`));
    });
});