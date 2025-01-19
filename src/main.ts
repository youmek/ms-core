import bodyParser from 'body-parser';
import express, { Router } from 'express';
import { courseRouter } from './routers';
import { AppDataSource } from './config/db';
import 'reflect-metadata';
import cors from 'cors';
import { allowedOrigins } from './utils';
import chapterRouter from './routers/chapter';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl)
        if (!origin || allowedOrigins.includes(origin) || /^http:\/\/localhost:\d+$/.test(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true,
}));

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Requests Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use('/courses', courseRouter);
app.use('/chapters', chapterRouter);

const startServer = async () => {
    try {
        AppDataSource.initialize().then(() => {
            console.log('Database connected')
            app.listen(port, () => {
                console.log(`Server is running on port ${port}`);
            });
        }).catch((error) => console.error('Database connection error:', error));
    } catch (error) {
        console.error("Failed to start server:", error);
    }
};

startServer();
