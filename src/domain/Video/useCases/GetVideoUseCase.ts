import IUseCase from '@core/IUseCase';

import IVideoData, { VideoFiltersDTO } from '../data/IVideoData';
import VideoEntity from '../entity/VideoEntity';

export default abstract class GetVideoUseCase
  implements IUseCase<VideoFiltersDTO, VideoEntity[] | undefined>
{
  constructor(private readonly videoProvider: IVideoData) {}

  public async execute(data: VideoFiltersDTO): Promise<VideoEntity[] | undefined> {
    return this.videoProvider.getVideo(data);
  }
}
