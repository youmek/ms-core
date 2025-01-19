// src/models/User.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Progress {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    uuid!: string;

    @Column({ name: "user_uuid" })
    userId!: string;

    @Column({ name: "course_uuid" })
    courseId!: string;

    @Column({ name: "chapter_uuid" })
    chapterId!: string;

    @Column({ name: "is_completed" })
    isCompleted!: boolean;

    @Column({ name: "is_started"})
    isStarted!: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date;
}
