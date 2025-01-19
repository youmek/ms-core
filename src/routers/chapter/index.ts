import { Router, Request, Response } from "express";
import { ChapterService } from "../../services/chapter";


const chapterRouter = Router();
const chapterService = new ChapterService();

chapterRouter.get('/', async (req: Request, res: Response) => {
    try {
        const chapters = await chapterService.getAllChapters();
        res.status(200).json(chapters)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

chapterRouter.get('/:chapter_uuid', async (req: Request, res: Response) => {
    const uuid = req.params['chapter_uuid'];
    const courseUuid = req.params['course_uuid'];
    try {
        const chapter = await chapterService.getChapterByUUID(courseUuid, uuid);
        res.status(200).json(chapter);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default chapterRouter;