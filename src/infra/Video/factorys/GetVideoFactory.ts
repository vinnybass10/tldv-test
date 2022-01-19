import GetVideoUseCase from '@domain/Video/useCases/GetVideoUseCase';
import VideoRepository from '@providers/database/typeorm/repositories/Video/VideoRepository';

export default class GetVideoFactory extends GetVideoUseCase {
  constructor() {
    super(new VideoRepository());
  }
}
