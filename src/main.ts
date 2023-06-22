import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // validation
  app.setGlobalPrefix('api/v1'); // prefix api
  // swagger docs
  const config = new DocumentBuilder()
    .setTitle('Kanban API')
    .setDescription('Kanban v1 api')
    .setVersion('1.0')
    .setBasePath('hola')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(3000, () => {
    console.log('server on http://localhost:' + process.env.PORT);
  });
}
bootstrap();
