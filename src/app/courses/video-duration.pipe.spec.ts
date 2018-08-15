import { VideoDurationPipe } from './video-duration.pipe';

describe('videoDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoDurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format number', () => {
    const pipe = new VideoDurationPipe();
    expect(pipe.transform('60', 'h m')).toBe('1h ');
    expect(pipe.transform('66', 'h m')).toBe('1h 6minutes');
  });

});
