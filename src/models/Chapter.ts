// src/models/User.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

type ChapterType = 'video' | 'text' | 'representation'

@Entity()
export class Chapter {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    uuid!: string;

    @Column({ name: "parent_chapter_uuid" })
    parentChapterUId!: string;

    @Column({ name: 'course_id' })
    courseId!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column()
    type!: ChapterType;

    @Column({ name: 'chapter_number' })
    chapterNumber!: number;

    @Column()
    content!: string;

    @Column({ name: "extra_content" })
    extraContent!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date;
}
