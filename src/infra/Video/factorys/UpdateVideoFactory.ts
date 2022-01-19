import UpdateVideoUseCase from '@domain/Video/useCases/UpdateVideoUseCase';
import VideoRepository from '@providers/database/typeorm/repositories/Video/VideoRepository';

export default class UpdateVideoFactory extends UpdateVideoUseCase {
  constructor() {
    super(new VideoRepository());
  }
}
