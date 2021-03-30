import { SeasonNamePipe } from './season-name.pipe';

describe('SeasonNamePipe', () => {
  it('create an instance', () => {
    const pipe = new SeasonNamePipe();
    expect(pipe).toBeTruthy();
  });
});
