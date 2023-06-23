import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true })
  column: string;

  @Prop({ required: true })
  board: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
