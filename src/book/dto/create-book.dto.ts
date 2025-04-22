// books/dto/create-book.dto.ts

import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { Category } from '../schemas/book.schema'

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  description: string

  @IsString()
  author: string

  @IsNumber()
  price: number

  @IsEnum(Category)
  category: Category
}
