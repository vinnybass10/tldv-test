import IVideoData, {
  CreateVideoData,
  UpdateVideoDTO,
  VideoFiltersDTO,
} from '@domain/Video/data/IVideoData';
import VideoEntity from '@domain/Video/entity/VideoEntity';
import { getRepository, Repository, MoreThan } from 'typeorm';

import VideoModel from '../../models/Video/VideoModel';

export default class VideoRepository implements IVideoData {
  private repository: Repository<VideoModel>;

  constructor() {
    this.repository = getRepository(VideoModel);
  }

  public async createVideo(data: CreateVideoData): Promise<VideoEntity> {
    const video = this.repository.create(data);

    return this.repository.save(video);
  }

  public async deleteVideo(videoId: number): Promise<boolean> {
    const { affected } = await this.repository.delete(videoId);

    return !!affected;
  }

  public async getVideoById(videoId: number): Promise<VideoEntity | undefined> {
    return this.repository.findOne(videoId);
  }

  public async getVideo(filters: VideoFiltersDTO): Promise<VideoEntity[] | undefined> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereConditions = {} as any;

    if (filters.name) whereConditions.name = filters.name;
    if (filters.url) whereConditions.url = filters.url;
    if (filters.thumbnailUrl) whereConditions.thumbnailUrl = filters.thumbnailUrl;
    if ('isPrivate' in filters) whereConditions.isPrivate = filters.isPrivate;
    if (filters.timesViewed) whereConditions.timesViewed = filters.timesViewed;
    if (filters.moreViewsThen) whereConditions.timesViewed = MoreThan(filters.moreViewsThen);

    return this.repository.find({
      where: whereConditions !== {} ? { ...whereConditions } : {},
      skip: filters.offset,
      take: filters.limit,
    });
  }

  public async updateVideo(videoId: number, data: UpdateVideoDTO): Promise<boolean> {
    const { affected } = await this.repository.update(videoId, data);

    return !!affected;
  }
}
