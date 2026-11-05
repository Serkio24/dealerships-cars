import { Entity } from 'typeorm';
import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Car } from '../../cars/entities/car.entity.js';

@Entity('dealerships')
export class Dealership {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city: string;

    @Column()
    active: boolean;

    @Column()
    created_at: Date;


    @Column()
    updated_at: Date;

}
