import VideoEntity from '@domain/Video/entity/VideoEntity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('video')
export default class VideoModel extends VideoEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  thumbnailUrl: string;

  @Column()
  isPrivate: boolean;

  @Column()
  timesViewed: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
