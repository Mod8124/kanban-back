import { Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TaskService } from '../service/task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @ApiOperation({
    summary: 'Get all task',
  })
  @Get()
  getALlTask() {
    return this.taskService.getAllTask();
  }

  @Post()
  postTask() {
    return this.taskService.postTask();
  }
}
