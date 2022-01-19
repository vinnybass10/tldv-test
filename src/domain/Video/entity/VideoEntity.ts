export default abstract class VideoEntity {
  id: number;
  name: string;
  url: string;
  thumbnailUrl: string;
  isPrivate: boolean;
  timesViewed: number;
}
