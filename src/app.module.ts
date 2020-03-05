import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './controllers/books/books.controller';
import { BooksService } from './services/books/books.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/crudNest'),
    MongooseModule.forFeature([{ name: 'books', schema: BookSchema }])
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
