import IUseCase from '@core/IUseCase';

import IVideoData, { CreateVideoDTO } from '../data/IVideoData';
import VideoEntity from '../entity/VideoEntity';

export default abstract class CreateVideoUseCase implements IUseCase<CreateVideoDTO, VideoEntity> {
  constructor(private readonly videoProvider: IVideoData) {}

  public async execute(data: CreateVideoDTO): Promise<VideoEntity> {
    return this.videoProvider.createVideo({
      ...data,
      timesViewed: 0,
    });
  }
}
