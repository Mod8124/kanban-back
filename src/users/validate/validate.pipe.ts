import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class ValidatePipeNumber implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    console.log(value);
    if (!Number(value)) {
      throw new HttpException('is not number', 404);
    }
    return value;
  }
}
