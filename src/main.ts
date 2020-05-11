import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddleware } from './middleware/logger.middleware';
import { GlobalExceptionFilter, GlobalGenericExceptionFilter } from './filters/global-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(loggerMiddleware);
  // Pass the params in Generic -> Specific exception filter order.
  app.useGlobalFilters(...[new GlobalGenericExceptionFilter(), new GlobalExceptionFilter()]);
  await app.listen(3000);
}
bootstrap();
