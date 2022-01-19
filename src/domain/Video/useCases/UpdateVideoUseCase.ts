import IUseCase from '@core/IUseCase';

import IVideoData, { UpdateVideoDTO } from '../data/IVideoData';
import VideoEntity from '../entity/VideoEntity';

export default abstract class UpdateVideoUseCase implements IUseCase<UpdateVideoDTO, boolean> {
  constructor(private readonly videoProvider: IVideoData) {}

  public async execute(data: UpdateVideoDTO, videoId: number): Promise<boolean> {
    return this.videoProvider.updateVideo(videoId, data);
  }
}
