import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateVideoTable1642611513511 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // eslint-disable-next-line no-plusplus
        for (let i = 1; i <= 1000; i++) {
            // eslint-disable-next-line no-await-in-loop
            await queryRunner.query(
                `INSERT INTO video (name, url, thumbnailUrl, isPrivate, timesViewed) VALUES ('Video ${i}', 'www.teste.com/video-${i}', 'www.teste.com/video-img-${i}', false, 0)`,
            );
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`TRUNCATE TABLE video`);
    }
}
