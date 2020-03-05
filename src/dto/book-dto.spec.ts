import { BookDto } from './book-dto';

describe('CreateBookDto', () => {
  it('should be defined', () => {
    expect(new BookDto()).toBeDefined();
  });
});
