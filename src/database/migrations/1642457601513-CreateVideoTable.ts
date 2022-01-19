import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateVideoTable1642457601513 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'video',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'thumbnailUrl',
                        type: 'varchar',
                    },
                    {
                        name: 'isPrivate',
                        type: 'boolean',
                    },
                    {
                        name: 'timesViewed',
                        type: 'integer',
                    },
                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('video');
    }
}
