import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBody,
  ApiHeader,
  ApiOkResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { CreateBoardDto } from '../dto/CreateBoard.dto';

@ApiTags('Board')
@Controller('board')
export class BoardController {
  @Get()
  @ApiOperation({ summary: 'Get all boards' })
  @ApiResponse({
    status: 200,
    description: 'Successful',
    schema: {
      properties: {
        status: { type: 'string' },
        data: { type: 'array', items: { type: 'string' } },
      },
    },
  })
  GetBoards() {
    return {
      status: 'succesful',
      data: [],
    };
  }

  @Post()
  @ApiOperation({ summary: 'Post a board' })
  postBoard(@Body() createBoard: CreateBoardDto) {
    return 'post board';
  }

  @Delete()
  @ApiOperation({ summary: 'Delete a board' })
  deleteBoard() {
    return 'delete board';
  }
}
