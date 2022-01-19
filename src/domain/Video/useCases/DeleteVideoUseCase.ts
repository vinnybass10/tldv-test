import IUseCase from '@core/IUseCase';

import IVideoData from '../data/IVideoData';

export default abstract class DeleteVideoUseCase implements IUseCase<number, boolean> {
  constructor(private readonly videoProvider: IVideoData) {}

  public async execute(videoId: number): Promise<boolean> {
    return this.videoProvider.deleteVideo(videoId);
  }
}
