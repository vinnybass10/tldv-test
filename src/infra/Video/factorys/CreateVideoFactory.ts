import CreateVideoUseCase from '@domain/Video/useCases/CreateVideoUseCase';
import VideoRepository from '@providers/database/typeorm/repositories/Video/VideoRepository';

export default class CreateVideoFactory extends CreateVideoUseCase {
  constructor() {
    super(new VideoRepository());
  }
}
