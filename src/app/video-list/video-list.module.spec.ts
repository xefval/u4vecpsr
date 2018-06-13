import { VideoListModule } from './video-list.module';

describe('VideoListModule', () => {
  let videoListModule: VideoListModule;

  beforeEach(() => {
    videoListModule = new VideoListModule();
  });

  it('should create an instance', () => {
    expect(videoListModule).toBeTruthy();
  });
});
