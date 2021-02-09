import { SomeTextPipe } from './some-text.pipe';

describe('SomeTextPipe', () => {
  it('create an instance', () => {
    const pipe = new SomeTextPipe();
    expect(pipe).toBeTruthy();
  });
});
