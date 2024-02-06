import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Category')
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
}
