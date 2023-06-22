import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getAllTask(): Promise<any> {
    return this.taskModel.find();
  }

  async postTask() {
    return this.taskModel.create({
      name: 'hola',
      description: 'que pasa chaval',
    });
  }
}
