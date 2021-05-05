import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { login } from '../seeds/login.seed';

export class login1620160012764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const permissions = await getRepository("login").save(login);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
