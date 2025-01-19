// src/config/database.ts
import { DataSource } from 'typeorm';
import { Course } from '../models/Course';
import { Chapter } from '../models/Chapter';
import { Progress } from '../models/Progress';
import { Subscription } from '../models/Subscription';

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_HOST,
    logging: true,
    entities: [Course, Chapter, Progress, Subscription],
});
