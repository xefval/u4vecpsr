import { VideoDirationPipe } from './video-duration.pipe';

describe('VideoDirationPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoDirationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should format number', () => {
    const pipe = new VideoDirationPipe();
    expect(pipe.transform('60', 'h m')).toBe('1h ');
    expect(pipe.transform('66', 'h m')).toBe('1h 6munutes');
  });

});
