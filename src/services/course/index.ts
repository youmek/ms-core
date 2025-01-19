import { AppDataSource } from '../../config/db';
import { Chapter } from '../../models/Chapter';
import { Course } from '../../models/Course';
import { Progress } from '../../models/Progress';
import { Subscription } from '../../models/Subscription';
import { formatChapters, generateUUID } from '../../utils';

export class CourseService {
    private courseRepository = AppDataSource.getRepository(Course);
    private chapterRepository = AppDataSource.getRepository(Chapter);
    private progressRepository = AppDataSource.getRepository(Progress);
    private subscriptionRepository = AppDataSource.getRepository(Subscription);

    async getAllCourses() {
        const courses = await this.courseRepository.find();
        return courses;
    }

    async getCourseByUUID(uuid: string) {
        const course = await this.courseRepository.findOne({ where: { uuid } })
        return course;
    }

    async getCourseProgress(courseUuid: string, userUuid: string) {
        const chapters = await this.chapterRepository.find({ where: { courseId: courseUuid } });

        if (!chapters.length) {
            throw new Error(`No chapters found for course with UUID: ${courseUuid}`);
        }

        const chaptersProgress = await this.progressRepository.find({
            where: {
                courseId: courseUuid,
                userId: userUuid,
                isStarted: true,
            },
            select: ["chapterId", "isCompleted", "isStarted"],
        });

        return {
            courseUuid,
            chaptersProgress,
            chapters: formatChapters(chapters)
        };
    }

    async subscribeCourse(courseUuid: string, userUuid: string) {
        const subscription = await this.subscriptionRepository.insert({
            uuid: generateUUID(),
            courseId: courseUuid,
            userId: userUuid
        });
        return subscription;
    }
}


export default CourseService;