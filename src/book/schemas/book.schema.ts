import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export enum Category {
  ADVENTURE = 'Adventure',
  CLASSICS = 'Classics',
  CRIME = 'Crime',
  FANTASY = 'Fantasy',
}

@Schema({
  timestamps: true,
})
export class Book {
  @Prop()
  title: string

  @Prop()
  description: string

  @Prop()
  author: string

  @Prop()
  price: number

  @Prop()
  category: Category
}

export type BookDocument = Book & Document

export const BookSchema = SchemaFactory.createForClass(Book)
