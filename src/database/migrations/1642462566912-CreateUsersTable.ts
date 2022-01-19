import { scryptSync } from 'crypto';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1642462566912 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                ],
            }),
        );

        const passHash = scryptSync('123456', 'test-salt', 32).toString('hex');
        await queryRunner.query(
            `INSERT INTO users (email, password) VALUES ('teste@teste.com', '${passHash}')`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
