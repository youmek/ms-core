import { AppDataSource } from "../../config/db";
import { Chapter } from "../../models/Chapter";

export class ChapterService {
    private chapterRepository = AppDataSource.getRepository(Chapter);

    async getChapterByUUID(courseUuid: string, uuid: string) {
        const chapter = await this.chapterRepository.findOneBy({ uuid, courseId: courseUuid })
        if (chapter) {
            return chapter
        } else throw new Error('Chapter Not Found !');
    }

    async getAllChapters() {
        const chapters = await this.chapterRepository.find();
        if (chapters) return chapters;
        throw new Error('Internal Error')
    }
}