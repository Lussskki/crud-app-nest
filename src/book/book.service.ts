import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Book, BookDocument } from './schemas/book.schema'
import { Model } from 'mongoose'

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name)
    private bookModel: Model<BookDocument>
  ) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec()
  }

  async create(book: Book): Promise<Book> {
    const createdBook = new this.bookModel(book)
    return createdBook.save()
  }
}
