import { MigrationInterface, QueryRunner } from 'typeorm'

export class InitialMigration1750252492443 implements MigrationInterface {
  name = 'InitialMigration1750252492443'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "survey" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "country" character varying NOT NULL, "age" character varying NOT NULL, "job" character varying NOT NULL, "belief" character varying NOT NULL, "action" character varying NOT NULL, "isAgreed" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE, "uid" character varying, CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "survey"`)
  }
}
