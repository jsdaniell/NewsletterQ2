import express from 'express';
import emailRoutes from "./routes/emailRoutes.js";

const app = express();

const PORT = 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());

app.use('/email', emailRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})