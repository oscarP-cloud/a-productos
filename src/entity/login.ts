// import { Productos } from './producto';
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()

export class Login {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    correo: string;

    @Column()
    password: string;
}

