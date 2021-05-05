import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
// import { Login } from "./login";

@Entity()
export class Productos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    categoria: string;

    @Column()
    precio: number;

    @Column()
    inventario: number;
}
