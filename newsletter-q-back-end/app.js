import express from 'express';
import emailRoutes from "./routes/emailRoutes.js";
import corsMiddleware from './middlewares/corsMiddleware.js';
import logMiddleware from './middlewares/logMiddleware.js';
import rateLimitMiddleware from './middlewares/rateLimitMiddleware.js';

const app = express();

const PORT = 3001;

app.use(corsMiddleware);
app.use(logMiddleware)
app.use(rateLimitMiddleware)

app.use(express.json());

app.use('/email', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})