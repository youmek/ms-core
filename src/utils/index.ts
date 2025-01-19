import { Chapter } from "../models/Chapter";
import { v4 as uuid } from 'uuid';
export const formatChapters = (chapters: Chapter[]) => {
    return chapters.map(chapter => ({
        id: chapter.uuid,
        properties: {
            name: chapter.name,
            description: chapter.description,
            content: chapter.content,
            type: chapter.type,
            parentChapterId: chapter.parentChapterUId,
            order: chapter.chapterNumber,
        },
        metadata: {
            createdAt: chapter.createdAt,
            updatedAt: chapter.updatedAt
        }
    }));
};

export const generateUUID = () => uuid;

export const allowedOrigins: Array<string> = [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://front-poc-latest.onrender.com'
];