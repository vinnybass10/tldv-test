import GetVideoByIdUseCase from '@domain/Video/useCases/GetVideoByIdUseCase';
import VideoRepository from '@providers/database/typeorm/repositories/Video/VideoRepository';

export default class GetVideoByIdFactory extends GetVideoByIdUseCase {
  constructor() {
    super(new VideoRepository());
  }
}
