import { Injectable } from '@nestjs/common';
import { IBook } from '../../interfaces/book.interface'
import { BookDto } from 'src/dto/book-dto';

@Injectable()
export class BooksService {
  getById(bookId: string) {
    return  null
  }

  getAll(): BookDto[] {
    return [];
  }

  createBook(BookDto): BookDto {
    return null;
  }

  modifyBook(id: string, book: BookDto) {

  }

  deleteBook(id: string) {

  }
}
