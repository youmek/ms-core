import { Router, Request, Response, NextFunction } from "express";
import { CourseService } from "../../services";

const courseRouter = Router();
const courseService = new CourseService();

courseRouter.get('/', async (req: Request, res: Response) => {
    try {
        const courses = await courseService.getAllCourses(); // pagination to be implemented later
        res.status(200).json(courses);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

courseRouter.get('/:uuid', async (req: Request, res: Response) => {
    const uuid = req.params['uuid'];
    try {
        const course = await courseService.getCourseByUUID(uuid);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(404).json({ error: 'Course not found' })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

courseRouter.get('/:uuid/progress', async (req: Request, res: Response) => {
    const courseUuid = req.params['uuid'];
    try {
        const courseProgress = await courseService.getCourseProgress(courseUuid, '194ab862-3322-4982-942b-501e2d0528bc');
        res.status(200).json(courseProgress)
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default courseRouter;