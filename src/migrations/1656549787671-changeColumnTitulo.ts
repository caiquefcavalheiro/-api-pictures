import { MigrationInterface, QueryRunner } from "typeorm";

export class changeColumnTitulo1656549787671 implements MigrationInterface {
    name = 'changeColumnTitulo1656549787671'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "picture" ADD CONSTRAINT "UQ_19c94f5f45026232a3305f71466" UNIQUE ("titulo")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "picture" DROP CONSTRAINT "UQ_19c94f5f45026232a3305f71466"`);
    }

}
