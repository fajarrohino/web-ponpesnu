import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1698941843347 implements MigrationInterface {
    name = 'MyMigration1698941843347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "username" character varying NOT NULL, "birth" date NOT NULL, "email" character varying NOT NULL, "gender" character varying NOT NULL, "age" character varying NOT NULL, "address" character varying NOT NULL, "attachment" character varying NOT NULL, "profile_picture" character varying NOT NULL, "whatsapp" integer NOT NULL, "password" character varying NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
