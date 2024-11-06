import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log("seever started at port 3333")
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
