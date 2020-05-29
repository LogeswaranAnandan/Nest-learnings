import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddleware } from './middleware/logger.middleware';
import { GlobalExceptionFilter, GlobalGenericExceptionFilter } from './filters/global-exception.filter';
import { ValidationPipe } from './pipe/validation.pipe';
import { AuthGuard } from './guards/auth.guards';
import { TestInterceptor } from './interceptors/test.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
   * NOTE: Order of execution
   * 1. Middleware
   * 2. Guards
   * 3. Interceptor
   * 4. Pipes
   * 5. Controller / Actual execution
  */
  app.use(loggerMiddleware);
  // Pass the params to useGlobalFilters in Generic -> Specific exception filter order.
  app.useGlobalFilters(...[new GlobalGenericExceptionFilter(), new GlobalExceptionFilter()]);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalGuards(new AuthGuard());
  app.useGlobalInterceptors(new TestInterceptor());
  await app.listen(3000);
}
bootstrap();
