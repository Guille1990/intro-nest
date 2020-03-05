import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BookDto } from '../../dto/book-dto';
import { BooksService } from 'src/services/books/books.service';

@Controller('books')
export class BooksController {
//   @Post()
//   @Get()
//   @Put()
//   @Delete()
  constructor(
    private readonly booksService: BooksService
  ) {}


  @Get()
  getAllBooks(): BookDto[] {
    return this.booksService.getAll();
  }

  @Get('id')
  getById(@Param('id') bookId: string): BookDto {
    return this.booksService.getById(bookId);
  }

  @Post()
  createBook(@Body() createBookDto: BookDto): BookDto {
    return this.booksService.createBook(createBookDto);
  }

  @Put(':id')
  modifyBook(@Param('id') bookId: string, @Body() book: BookDto): string {
    return this.booksService.modifyBook(bookId, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') bookId: string): string {
    return this.booksService.deleteBook(bookId);
  }
}
