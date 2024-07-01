import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import usersRouter from './routes/usersRoutes.js';

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Welcome to the Users WBS API!');
});

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});