import {MigrationInterface, QueryRunner} from "typeorm";

export class initialDdl1654980485897 implements MigrationInterface {
    name = 'initialDdl1654980485897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "instructor" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "specialty" character varying NOT NULL,
                "description" character varying NOT NULL,
                "fullName" character varying NOT NULL,
                "imageName" character varying NOT NULL,
                "imageFile" bytea,
                CONSTRAINT "PK_ccc0348eefb581ca002c05ef2f3" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "instructor"
        `);
    }

}
