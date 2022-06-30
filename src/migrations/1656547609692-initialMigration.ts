import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1656547609692 implements MigrationInterface {
    name = 'initialMigration1656547609692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "picture" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying NOT NULL, "imagem" character varying NOT NULL, "descricao" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_31ccf37c74bae202e771c0c2a38" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "picture"`);
    }

}
