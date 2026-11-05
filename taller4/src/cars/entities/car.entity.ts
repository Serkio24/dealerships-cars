import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dealership } from '../../dealership/entities/dealership.entity.js';

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    plate: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    price: number;

    @Column()
    status: string;

    @Column()
    dealership_id: number;

    @OneToMany(() => Dealership, (dealership) => dealership.cars)
    dealership: Dealership;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;


}


