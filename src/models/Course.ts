// src/models/User.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    uuid!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt!: Date;
}
