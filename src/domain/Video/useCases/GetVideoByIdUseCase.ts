import IUseCase from '@core/IUseCase';

import IVideoData from '../data/IVideoData';
import VideoEntity from '../entity/VideoEntity';

export default abstract class GetVideoByIdUseCase
  implements IUseCase<number, VideoEntity | undefined>
{
  constructor(private readonly videoProvider: IVideoData) {}

  public async execute(videoId: number): Promise<VideoEntity | undefined> {
    return this.videoProvider.getVideoById(videoId);
  }
}
